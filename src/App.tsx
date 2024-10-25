import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import UserPage from './pages/User'
import EditUserPage from './pages/User/edit'
import Roles from './components/Roles';

import Layout from './pages/User/Layout'

import './App.scss'

const router = createBrowserRouter([
  { path: '/', Component: LoginPage },
  { path: '/login', Component: LoginPage },
  { path: '/home', Component: HomePage },
  { path: '/user/create', Component: UserPage },
  { path: '/user/:id/edit', Component: EditUserPage },
  { path: '/roles', Component: Roles }, // Adicionando a rota para Roles
]);

export default function App() {

  return (
    <RouterProvider router={router} />
  )
  
}


