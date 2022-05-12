import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Action from '../../Shop/Action';
import Selector from '../../Shop/Selector';
import namePage from '../../Constants/NamePage';


const DetailPage: React.FC = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = params.id;
  console.log(id)

  const CountChapter = Selector.app.QuantityChapter();

  const [data, setData] = useState({
    id: id,
    page: 1,
    sort: 'name'
  })
  const [page, setPage] = useState(1)

  const dataOneManga = Selector.app.DataOneManga();
  const listChapter = Selector.app.DataManyChapter();

  useEffect(() => {
    if (dataOneManga === '') {
      dispatch(Action.app.findMangaById(id))
      dispatch(Action.app.findChapterByMangaId(data))
    } else {
      dispatch(Action.app.findMangaById(id))
      dispatch(Action.app.findChapterByMangaId(data))
    }
  }, [dispatch, data]);

  console.log('listChapter', listChapter);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    setData({ ...data, page: value })
  };

  const handleClick = (item: any) => () => navigate(`${namePage.chapter}/${item.book.title}/chap-${item.name}/${item._id}`)

  return (
    <section className="detail-page">
      <div id="main">
        <div className="fakebox"></div>
        <div className="background-realbox">
          <div className="row position-realbox-absolute">
            <div className="page-content">
              <div className="widget-sidebar">
                <div className="poster-manga">
                  <a href="" className="poster">
                    <img src={dataOneManga?.manga?.image?.bookCover?.url} alt="photo" />
                    <div className="icon_img_poster">
                      <i className="bx bx-play" />
                    </div>
                  </a>
                </div>
                <div className="information">
                  <ul>
                    <li>
                      <p>
                        Name : <span> {dataOneManga?.manga?.title} </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Author :
                        {dataOneManga?.manga?.author?.map((item: any, index: number) => {
                          return (
                            <span key={index}> {item.name}, </span>
                          )
                        })}
                      </p>
                    </li>
                    <li>
                      <p>
                        Allowed-Age : <span> {dataOneManga?.manga?.allowebAge} </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Manga Rank : <span>#768</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Chapters : <span> #{dataOneManga?.chapter?.length} </span>
                      </p>
                    </li>
                  </ul>
                </div>
                <h1 className="area-title">RELATED ANIME</h1>
                {/* POSTER MANGA */}
                <div className="poster-manga">
                  <a href="manga-naruto">
                    <img src="https://res.cloudinary.com/dwnucvodc/image/upload/v1649153403/Flex-ticket/ImageBook/xgogayutkcrzclsrdmm8.jpg" alt="Manga Naruto" />
                  </a>
                  <a href="#" className="rating">
                    <p>RATING</p>
                    <span>9.0</span>
                  </a>
                  <div className="icon">
                    <a href="" className="icon-link">
                      <i className="icon-play fa-solid fa-play" />
                    </a>
                  </div>
                  <div className="content-anime">
                    <h1>Boruto Naruto Next Generation</h1>
                    <hr />
                    <p>MANGA</p>
                  </div>
                  <a href="https://phenixthemes.com/frontdemo/animtora/anime-details.html" className="media-block" />
                </div>
                {/* SOCIAL  */}
                <div className="btn-group">
                  <div className="list-item fb">
                    <div className="icon">
                      <i className="icon__social icon_facebook fa-brands fa-facebook-f" />
                    </div>
                    <div className="link-share link-share__bgfb">
                      <a href="" className="btn-flip" data-back="Share on Facebook" data-front="Facebook" />
                    </div>
                  </div>
                  <div className="list-item twitter">
                    <div className="icon">
                      <i className="icon__social icon_twitter fa-brands fa-twitter" />
                    </div>
                    <div className="link-share link-share__twitter">
                      <a href="" className="btn-flip" data-back="Share on Twitter" data-front="Twitter" />
                    </div>
                  </div>
                  <div className="list-item whatsapp">
                    <div className="icon">
                      <i className="icon__social icon_whatsapp fa-brands fa-whatsapp" />
                    </div>
                    <div className="link-share link-share__whatsapp">
                      <a href="" className="btn-flip" data-back="Share on Whatsapp" data-front="Whatsapp" />
                    </div>
                  </div>
                  <div className="list-item instagram">
                    <div className="icon">
                      <i className="icon__social icon_instagram fa-brands fa-instagram" />
                    </div>
                    <div className="link-share link-share__instagram">
                      <a href="" className="btn-flip" data-back="Share on Instagram" data-front="Instagram" />
                    </div>
                  </div>
                </div>
              </div>
              {/* DETAIL CONTENT */}
              <section className="detail__content">
                <header className="header__detail__content">
                  <h1>{dataOneManga?.manga?.title}</h1>
                  <p>
                    Manga Status <span>: {dataOneManga?.manga?.status} </span>
                  </p>
                  <div className="rating__star">
                    <i className="icon_rating__star active fa-solid fa-star" />
                    <i className="icon_rating__star active fa-solid fa-star" />
                    <i className="icon_rating__star active fa-solid fa-star" />
                    <i className="icon_rating__star active fa-solid fa-star" />
                    <i className="icon_rating__star fa-solid fa-star" />
                  </div>
                  <div className="media-statistic">
                    <div className="fakebox__chapers__container">
                      <h4>
                        <span>{dataOneManga?.chapter?.length}/?</span>
                        <br />
                        <p>CHAPTERS</p>
                        <i className="fa-solid fa-bars-staggered" />
                      </h4>
                      <h4>
                        <span>50</span>
                        <br />
                        <p>VOTING</p>
                        <i className="fa-solid fa-star-half-stroke" />
                      </h4>
                      <h4>
                        <span> {dataOneManga?.manga?.view} </span>
                        <br />
                        <p>VIEWS</p>
                        <i className="fa-solid fa-eye" />
                      </h4>
                    </div>
                  </div>
                </header>
                {/* CONTENT-TEXT */}
                <article className="content-text">
                  <h2>THE STORY LINE</h2>
                  <p>
                    {dataOneManga?.manga?.description}
                  </p>
                </article>
                {/* BUTTONS */}
                <div className="container__btns">
                  <div className="btn__item btn__item__favorite">
                    <a className="btn__item__link" href="">
                      <i className="btn__item__icon fa-solid fa-heart" />
                      <p>Add To Fevorite</p>
                    </a>
                  </div>
                  <div className="btn__item btn__item__watch">
                    <a className="btn__item__link" href="">
                      <i className="btn__item__icon fa-solid fa-clock" />
                      <p>Watch Later</p>
                    </a>
                  </div>
                  <div className="btn__item btn__item__watched">
                    <a className="btn__item__link" href="">
                      <i className="btn__item__icon fa-solid fa-bars" />
                      <p>Watched</p>
                    </a>
                  </div>
                  <div className="btn__item btn__item__wishlist">
                    <a className="btn__item__link" href="">
                      <i className="btn__item__icon fa-solid fa-list-check" />
                      <p>Wish list</p>
                    </a>
                  </div>
                  <div className="btn__item btn__item__subscribe">
                    <a className="btn__item__link" href="">
                      <i className="btn__item__icon fa-solid fa-bell" />
                      <p>Subscribe</p>
                    </a>
                  </div>
                </div>
                <section className="chapters">
                  <h1>CHAPTERS LIST</h1>
                  <nav className="chapters_nav">
                    {listChapter?.length === 0 ? (
                      <h1>Đang cập nhật!!!</h1>
                    ) : (
                      listChapter?.map((item: any, index: number) => {
                        return (
                          <li key={index}>
                            <div className="chapter__link" onClick={handleClick(item)}>
                              <div className="chapter__item">
                                <h3>CHAPTER {item.name} </h3>
                                <p>Chapter Title Goes Here</p>
                              </div>
                            </div>
                            <div className="btn__read_download">
                              <a className="chapter__link" href=""></a>
                              <a href="" className="btn__read">
                                <i className="bx bx-book-reader" />
                                <p>Read</p>
                              </a>
                              <a href="" className="btn__download">
                                <i className="bx bxs-download" />
                                <p>Download</p>
                              </a>
                            </div>
                          </li>
                        );
                      })
                    )}

                  </nav>
                </section>

                <Stack sx={{ mt: 5, mb: 5 }}>
                  <Pagination size="large" variant="outlined" shape="rounded"
                    showFirstButton
                    showLastButton
                    count={CountChapter % 5 === 0 ? parseInt((CountChapter / 5).toString()) : (parseInt((CountChapter / 5).toString()) + 1)}
                    page={page} onChange={handleChangePage}
                  />
                </Stack>
                <section className="tags">
                  <h1>TAGS</h1>
                  <ul className="tag__item">
                    <li>
                      <a href="">Manga</a>
                    </li>
                    <li>
                      <a href="">FullMetal</a>
                    </li>
                    <li>
                      <a href="">Alchemist</a>
                    </li>
                    <li>
                      <a href="">Brotherhood</a>
                    </li>
                    <li>
                      <a href="">Action</a>
                    </li>
                    <li>
                      <a href="">Adventure</a>
                    </li>
                    <li>
                      <a href="">Comedya</a>
                    </li>
                    <li>
                      <a href="">Chapter</a>
                    </li>
                    <li>
                      <a href="">Manga</a>
                    </li>
                    <li>
                      <a href="">FullMetal</a>
                    </li>
                    <li>
                      <a href="">Alchemist</a>
                    </li>
                  </ul>
                </section>
                <section className="comment-form">
                  <h2 className="border_right">ADD COMMENT</h2>
                  <form action="">
                    <input className="input__form" type="text" placeholder="Name" />
                    <input className="input__form" type="email" placeholder="Email" />
                    <br />
                    <textarea name="" id="" placeholder="Comment" cols={30} rows={5} defaultValue={''} />
                    <input className="btn_addcommet" type="submit" value="Add Comment" />
                  </form>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
