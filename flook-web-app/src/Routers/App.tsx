import namePage from '../Constants/NamePage';
import HomePage from '../Pages/Home';
import DetailPage from '../Pages/Detail';
import MangaPage from '../Pages/Manga';
import ChapterPage from '../Pages/Chapter';
import ErrorPage from '../Components/ErrorPage'
import { AppTemplate } from '../Template';

const AppRouter = [
  { 
    path: namePage.default, 
    element: <AppTemplate Component={HomePage} Carousel={true}/> ,
  },
  { 
    path: namePage.home, 
    element: <AppTemplate Component={HomePage} Carousel={true}/> 
  },
  { 
    path: namePage.detail + '/:id', 
    element: <AppTemplate Component={DetailPage} Carousel={false}/> 
  },
  { 
    path: namePage.manga, 
    element: <AppTemplate Component={MangaPage} Carousel={false}/> 
  },
  { 
    path: namePage.chapter + '/:name' + '/:chap' + '/:id',  
    element: <AppTemplate Component={ChapterPage} Carousel={false}/>  
  },
  { 
    path: namePage.error,  
    element: <AppTemplate Component={ErrorPage} Carousel={false}/>   
  },
];

export default AppRouter;
