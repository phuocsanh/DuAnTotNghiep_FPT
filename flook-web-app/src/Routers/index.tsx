import AppRouter from './App';
import AdminRouter from './Admin'
import { useRoutes } from 'react-router-dom';

export interface RouterProps {}

export default function Routers (props: RouterProps) {
  
  return useRoutes([...AppRouter, AdminRouter]);
}
