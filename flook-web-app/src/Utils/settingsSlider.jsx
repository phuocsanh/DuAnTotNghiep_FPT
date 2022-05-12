import { Images } from "../Assets/Images";

export const settingsSlider = (className, show, time) => ({
  className: className, arrows: false,
  dots: false, slickNext: false, infinite: true, autoplay: true, slidesToShow: show, slidesToScroll: 1, initialSlide: 0, autoplaySpeed: time,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true } },
    { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1, initialSlide: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 2} },
  ],
});

export const dataCarouselDemo = [
  { title: 'Boroto', rating: 8.0, chapter: 123, image: {bookCover: {id:'', url: Images.carousel01}} },
  { title: 'Naruto', rating: 8.0, chapter: 123, image: {bookCover: {id:'', url: Images.carousel02}} },
  { title: 'Sakura', rating: 8.0, chapter: 123, image: {bookCover: {id:'', url: Images.carousel03}} },
  { title: 'Hanita', rating: 8.0, chapter: 123, image: {bookCover: {id:'', url: Images.carousel04}} },
  { title: 'Sasuke', rating: 8.0, chapter: 123, image: {bookCover: {id:'', url: Images.carousel05}} },
  { title: 'Đệ Tứ', rating: 8.0, chapter: 123, image: {bookCover: {id:'', url: Images.carousel06}} },
]




