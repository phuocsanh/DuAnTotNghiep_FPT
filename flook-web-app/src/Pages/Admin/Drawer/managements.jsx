import namePage from '../../../Constants/NamePage';
import { 
  IconDatabase, 
  IconUserCircle, 
  IconNotebook, 
  IconBook, 
  IconFileInfo, 
  IconLicense 
} from '@tabler/icons';


// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

// you can add element "target: true" if you want open new tab into browser

const types = {
  item: 'item',
  group: 'group',
  collapse: 'collapse'
}

const users = [
  {
    id: 'id-books-default',
    title: 'User',
    url: '/table/auth',
    type: types.item, icon: IconUserCircle, breadcrumbs: false,
  },
  {
    id: 'id-books-default',
    title: 'Notify',
    url: '/table/books/default',
    type: types.item, icon: IconUserCircle, breadcrumbs: false,
  },
  {
    id: 'id-books-default',
    title: 'Roles',
    url: '/table/books/default',
    type: types.item, icon: IconUserCircle, breadcrumbs: false,
  },
  {
    id: 'id-books-chapter',
    title: 'Card holder',
    type: 'item',
    url: namePage.chapters, icon: IconFileInfo, breadcrumbs: false,
  }
]

const books = [
  {
    id: 'id-books-default',
    title: 'Books',
    type: 'item',
    url: '/table/books/default',
    icon: IconBook, breadcrumbs: false,
  },
  {
    id: 'id-books-author',
    title: 'Authors',
    type: 'item',
    url: '/table/books/authors',
    icon: IconLicense, breadcrumbs: false,
  },
  {
    id: 'id-books-chapter',
    title: 'Chapters',
    type: 'item',
    url: namePage.chapters, icon: IconFileInfo, breadcrumbs: false,
  },
  
]

const colections = [
  {
    id: 'id-colections',
    title: 'Colections',
    type: types.collapse, icon: IconDatabase,
    children: [
      {
        id: 'id-colections-auth',
        title: 'Auth',
        url: '/colections/auth',
        type: types.collapse, icon: IconUserCircle, breadcrumbs: false,
        children: [...users]
      },
      {
        id: 'id-colections-books',
        title: 'Books',
        url: '/colections/books',
        type: types.collapse, icon: IconNotebook, breadcrumbs: false,
        children: [...books]
      },
    ],
  }
]


const Management_data = {
  id: 'id-managements-data',
  title: 'Management Data',
  caption: 'Pages Caption',
  type: types.group,
  children: [...colections],
};


export default Management_data