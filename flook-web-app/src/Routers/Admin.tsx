import { lazy } from 'react';
import namePage from '../Constants/NamePage';
import AdminPage from '../Pages/Admin';
import Loadable from '../Components/Loadable'

const Dashboard = Loadable(lazy(() => import('../Pages/Admin/Views/Dashboard')));
const TableAuth = Loadable(lazy(() => import('../Pages/Admin/Views/User/index')))

interface AdminRouter {
  path: string;
  element: JSX.Element,
  children: {
    path: string;
    element: JSX.Element,
  }[]
} 

const AdminRouter: AdminRouter = { 
  path: namePage.admin, 
  element: <AdminPage/>,
  children: [
    { path: namePage.admin, element: <Dashboard /> },
    { path: namePage.dashboard, element: <Dashboard /> },
    { path: namePage.tableAuth, element: <TableAuth /> }
  ]
}


export default AdminRouter;