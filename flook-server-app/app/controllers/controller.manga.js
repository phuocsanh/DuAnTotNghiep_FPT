const { MODEL_MANGAS, MODEL_GENRES, MODEL_AUTHORS, MODEL_CHAPTERS } = require("../models");
const cloudinary = require('../configs/configs.cloudnary')
const handleError = require("../Error/HandleError");
const messages = require("../constants/Messages");
const folder = { folder: 'Flex-ticket/ImageBook' }
const FormatDate = require('../utils/FormatDate')

const findMangaById = async (req, res) => {

  const id = req.params.id;
  let manga;
  let chapter;
  let data;

  try {
    manga = await MODEL_MANGAS.findById(id).populate('author');
    chapter = await MODEL_CHAPTERS.find({ book: id });

    data = { manga, chapter }

    return res.status(200).send(data);
  } catch (error) {
    handleError.ServerError(error, res);
  }
};

const findManga = async (req, res) => {

  const deleted = req.query.deleted;
  let result;

  try {
    (deleted === "true")
      ? result = await MODEL_MANGAS.find({ deleted: { $in: true } })
      : (deleted === "false")
        ? result = await MODEL_MANGAS.find({ deleted: { $in: false } })
        : result = await MODEL_MANGAS.find();
    return res.status(200).send(result);
  } catch (error) {
    handleError.ServerError(error, res);
  }
};

const findMangaByGenre = async (req, res) => {

  try {
    const genreName = req.query.genreName;
    const sort = req.query.sort;

    const genre = await MODEL_GENRES.find({ name: { $in: genreName } })
    console.log(genre)

    if (genre.length === 0) {
      console.log(messages.NotFound);
      return res.status(404).send({ messages: messages.NotFound + genreName });
    }

    const result = await MODEL_MANGAS.find({ genre: genre })
    return res.status(200).send(result);

  } catch (error) {
    handleError.ServerError(error, res);
  }

};

const findMangaByAuthor = async (req, res) => {

  try {
    const autherName = req.query.autherName;
    const title = await MODEL_MANGAS.find({ title: { $in: req.body.title } });
    const sort = req.query.sort;

    const auther = await MODEL_AUTHORS.find({ name: { $in: autherName } })
    console.log(auther)
    if (auther.length === 0) {
      console.log(messages.NotFound);
      return res.status(404).send({ messages: messages.NotFound + autherName });
    }

    const result = await MODEL_MANGAS.find({ auther: auther })
    return res.status(200).send(result);

  } catch (error) {
    handleError.ServerError(error, res);
  }

};

const addManga = async (req, res) => {

  const dataBook = req.body.title;

  try {
    const title = await MODEL_MANGAS.findOne({ title: dataBook });

    if (title) {
      console.log("tên sách tồn tại!!!");
      return res.status(400).send(title);
    }

    const imageUpload = await cloudinary.uploader.upload(req.file?.path, folder);
    const newBook = new MODEL_MANGAS({
      ...req.body, image: { id: imageUpload.public_id, url: imageUpload.secure_url }, createAt: Date.now()
    });

    const genreBook = await MODEL_GENRES.find({ name: { $in: req.body.genre } })
    newBook.genre = genreBook?.map((genre) => genre._id);

    const auther = await MODEL_AUTHORS.find({ name: { $in: req.body.auther } })
    console.log(auther)
    if (auther.length === 0) {
      const newAuther = new MODEL_AUTHORS({
        ...req.body, book: req.body._id, name: req.body.auther
      });
      await newAuther.save();
      newBook.auther = auther?.map((auther) => auther._id);
    } else {
      newBook.auther = auther?.map((auther) => auther._id);
    }

    const result = await newBook.save();
    if (result) {
      const response = {
        data: result,
      }
      return res.status(200).send(response);
    }
  } catch (error) {
    handleError.ServerError(error, res);
  }

};


//Filter Book

const filterManga = async (req, res) => {

  const { author, genre, status, allowedAge, chapter } = req.body;

  const sort = req.query.sort;

  let page = parseInt(req.query.page);

  console.log(`page ${page}`);
  console.log(`sort ${sort}`);
  const PAGE_SIZE = 12;
  page < 0 ? (page = 1) : (page = page);
  const skip = (page - 1) * PAGE_SIZE;


  let find = {}

  try {
    if (page && sort) {
      if (author.length === 0 && genre.length === 0 &&
        status.length === 0 && allowedAge.length === 0) {
        console.log("find null")
        find = null
      }
      else {
        find = {
          $or: [
            { genre: { $in: genre } },
            { author: { $in: author } },
            { status: { $in: status } },
            { allowedAge: { $in: allowedAge } },

          ]
        }
      }
      const sortBook = sort === "view" ? { view: -1 } : { title: 1 }
      const count = await MODEL_MANGAS.find(find).count();
      console.log("count", count)
      const result = await MODEL_MANGAS.find(find)
        .populate(["author", "genre"])
        .skip(skip)
        .limit(PAGE_SIZE)
        .sort(sortBook);
      return res.status(200).send({ data: result, count: count, messages: 'Thành công' })
    } else if (page) {
      if (author.length === 0 && genre.length === 0 &&
        status.length === 0 && allowedAge.length === 0) {
        console.log("find null")
        find = null
      } else {
        find = {
          $or: [
            { genre: { $in: genre } },
            { author: { $in: author } },
            { status: { $in: status } },
            { allowedAge: { $in: allowedAge } },
          ]
        }
      }
      const count = await MODEL_MANGAS.find(find).count();

      const result = await MODEL_MANGAS.find(find)
        .populate(["author", "genre"])
        .skip(skip)
        .limit(PAGE_SIZE);
      return res.status(200).send({ data: result, count: count, messages: 'Thành công' })

    }

    return res.status(400).send({ messages: "lỗi" })

  } catch (error) {
    return handleError.ServerError(error, res)
  }
}

// Filter Book test
const filterMangaTest = async (req, res) => {
  // const { status, genre, author } = req.body;
  // console.log(status, genre, author);

  // const filter = [];
  // if (status != "") filter.push({ status: status });
  // if (genre.length > 0) filter.push({ genre: { $in: genre } });
  // if (author.length > 0) filter.push({ author: { $in: author } });

  // const listBook = await MODEL_MANGAS.find({
  //   $or: filter
  // });

  return res.status(200).send({ data: listBook });
}
const deleteMangaById = async (req, res) => {

  const id = req.params.id;
  const bookFind = await MODEL_MANGAS.findById(id);
  let row;

  try {
    row = await MODEL_MANGAS.findByIdAndRemove(id).exec() && await cloudinary.uploader.destroy(bookFind.image.id);
    console.log(row);
    if (!row) {
      console.log(messages.NotFound);
      return res.status(404).send({ messages: messages.NotFound + id });
    }
    console.log(messages.DeleteSuccessfully);
    return res.status(200).send({ messages: messages.DeleteSuccessfully });
  } catch (error) {
    return handleError.ServerError(error, res)
  }

};

const deletedManga = async (req, res) => {

  const option = { new: true };
  const id = req.params.id;
  const bookFind = await MODEL_MANGAS.findById(id);
  let row;

  try {

    if (bookFind.deleted === true) {
      row = await MODEL_MANGAS.findByIdAndUpdate(id, { deleted: false, deleteAt: "", updateAt: bookFind.updateAt, createAt: bookFind.createAt }, option);
    } else {
      row = await MODEL_MANGAS.findByIdAndUpdate(id, { deleted: true, deleteAt: FormatDate.addDays(0), updateAt: bookFind.updateAt, createAt: bookFind.createAt }, option);
    }
    console.log(row);
    if (!row) {
      console.log(messages.NotFound);
      return res.status(404).send({ messages: messages.NotFound + id });
    }
    console.log(messages.DeleteSuccessfully);
    return res.status(200).send({ messages: messages.DeleteSuccessfully });
  } catch (error) {
    return handleError.ServerError(error, res)
  }

};

const updateManga = async (req, res) => {

  const id = req.params.id;
  const image = req.body.image;
  console.log(image);
  const option = { new: true };
  let imageUpload
  try {
    const bookFind = await MODEL_MANGAS.findById(id);
    if (req.file) {
      await cloudinary.uploader.destroy(bookFind.image.id);
      imageUpload = await cloudinary.uploader.upload(req.file?.path, folder);
    } else {
      imageUpload = await cloudinary.uploader.upload(image, folder);
      await cloudinary.uploader.destroy(bookFind.image.id);
    }

    const updateBook = new MODEL_MANGAS({
      ...req.body, _id: id, image: { id: imageUpload?.public_id, url: imageUpload?.secure_url }, updateAt: Date.now(), createAt: bookFind.createAt, deleteAt: bookFind.deleteAt
    });

    const genreBook = await MODEL_GENRES.find({ name: { $in: req.body.genre } })
    updateBook.genre = genreBook?.map((genre) => genre._id);
    const result = await MODEL_MANGAS.findByIdAndUpdate(id, updateBook, option);

    if (!result) {
      return handleError.NotFoundError(id, res)
    }
    return res.status(200).send({ messages: messages.UpdateSuccessfully, data: result });
  } catch (error) {
    return handleError.ServerError(error, res)
  }

}

module.exports = {
  findMangaById,
  findManga,
  findMangaByGenre,
  findMangaByAuthor,
  addManga,
  deleteMangaById,
  deletedManga,
  updateManga,
  filterManga,
  filterMangaTest


}