import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Action from '../../Shop/Action';
import Selector from '../../Shop/Selector';

const ChapterPage: React.FC = () => {

  let params = useParams()

  const id = params.id;
  console.log(id)

  const dispatch = useDispatch();

  const dataOneChapter = Selector.app.DataOneChapter();
  console.log(dataOneChapter);

  useEffect(() => {
    dispatch(Action.app.findChapterById(id))
  }, [dispatch]);

  return (
    <section className="chapter-page">
      <div className="main">
        <section className="page_head">
          <h1 className="text-center py-2"> {dataOneChapter?.book?.title} </h1>
          <div className="page_control text-center d-flex m-auto">
            <a href="" className="page_link_left ">Previous</a>
            <span className="w-100 h-100 d-flex justify-content-center align-items-center">Chapter : {dataOneChapter?.name} </span>
            <a href="" className="page_link_right ">Next</a>
          </div>
        </section>
        <section className="page_content">
          <div className="wrap_container w-100 d-flex">
            <div className="left_sidebar_social">
              <div className="btn_group">
                <div className="btn_list_item d-flex">
                  <div className="icon bg_screen">
                    <i className="fa-solid fa-expand" />
                  </div>
                  <div className="btn_text">
                    <a href="" className="btn-flip link_screen" data-back="Screen" data-front="Full Screen Reader" />
                  </div>
                </div>
                <div className="btn_list_item d-flex">
                  <div className="icon bg_download">
                    <i className="fa-solid fa-arrow-down" />
                  </div>
                  <div className="btn_text">
                    <a href="" className="btn-flip link_download" data-back="Download Now" data-front="Download Chapter" />
                  </div>
                </div>
                <div className="dropdown_">
                  <div className="icon_dropdown" />
                  <div className="dropdown_select d-flex h-100 w-100 justify-content-center align-items-center">
                    <span className="ms-2">Select Chapter</span>
                    <i className='bx bxs-chevron-down' ></i>
                  </div>
                  <div className="dropdown_list">
                    <div className="dropdown_list-item">
                      <div className="input_search d-flex align-items-center ">
                        <i className="ti-search text-dark px-2 " />
                        <input className="w-100" type="text" placeholder="filter" />
                      </div>
                      <p className="text-dark">Select Chapter</p>
                      <a href="">1</a>
                      <a href="">2</a>
                      <a href="">3</a>
                      <a href="">4</a>
                      <a href="">5</a>
                      <a href="">6</a>
                      <a href="">7</a>
                      <a href="">8</a>
                      <a href="">9</a>
                      <a href="">10</a>
                    </div>
                  </div>
                </div>
                <div className="btn_list_item d-flex">
                  <div className="icon bg_facebook">
                    <i className="fa-brands fa-facebook-f" />
                  </div>
                  <div className="btn_text">
                    <a href="" className="btn-flip link_facebook" data-back="Share on Facebook" data-front="Facebook" />
                  </div>
                </div>
                <div className="btn_list_item d-flex">
                  <div className="icon bg_twitter">
                    <i className="fa-brands fa-twitter" />
                  </div>
                  <div className="btn_text">
                    <a href="" className="btn-flip link_twitter" data-back="Share on Twitter" data-front="Twitter" />
                  </div>
                </div>
                <div className="btn_list_item d-flex">
                  <div className="icon bg_whatsapp">
                    <i className="fa-brands fa-whatsapp" />
                  </div>
                  <div className="btn_text">
                    <a href="" className="btn-flip link_whatsapp" data-back="Share on WhatsApp" data-front="WhatsApp" />
                  </div>
                </div>
              </div>
            </div>
            <div className="right_sidebar_content w-75">
              <div className="reader_nav d-flex justify-content-between align-items-center">
                <div>
                  <a className="ms-3 d-flex align-items-center" href="">
                    <i className='bx bx-chevron-left' ></i>
                    <span>Previous Page</span>
                  </a>
                </div>
                <p className="mb-0">Page 01</p>
                <a className="me-3 d-flex align-items-center" href="">
                  <span>Next Page</span>
                  <i className='bx bx-chevron-right' />
                </a>
              </div>
              {dataOneChapter?.image?.map((item: any, index: number) => {
                return (
                  <div key={index} className="manga_inner">
                    <img className="w-100" src={item?.url} alt="" />
                  </div>
                )
              })}
              <div className="reader_nav d-flex justify-content-between align-items-center">
                <a className="ms-3 d-flex align-items-center" href="">
                  <i className='bx bx-chevron-left' ></i>
                  <span>Previous Page</span>
                </a>
                <p className="mb-0">Page 01</p>
                <a className="me-3 d-flex align-items-center" href="">
                  <span>Next Page</span>
                  <i className='bx bx-chevron-right' />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

    </section>
  )
}

export default ChapterPage;