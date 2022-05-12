interface namePage {
  default: string;
  home: string;
  detail: string;
  chapter: string;
  about: string;
  forums: string;
  contact: string;
  apply: string;
  admin: string;
  dashboard: string;
  tableAuth: string;
  chapters: string;
  manga: string;
  movie: string;
  error: string;
}

const namePage: namePage = {
  default: '/',
  home: '/home',
  detail: '/detail',
  chapter: '/chapter',
  about: '/about',
  contact: '/contact',
  apply: '/apply',
  forums: '/forums',
  manga: '/manga',
  movie: '/movie',
  admin: '/admin',
  error: '/NotFound-404',



  dashboard: '/admin/dashboard',
  tableAuth: '/admin/table/auth',
  chapters: '/table/books/chapters',
  
  
}

export default namePage
