import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Header,Footer,About,Home,Contact,User,Github } from './components/index.js'
import { githubInLoader } from './components/Github/Github.jsx'
const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"",
        element:<Home/>,
      },
      {
        path: "About",
        element: <About/>
      },
      {
        path: "Contact",
        element: <Contact/>
      },
      {
        path: "user/:userid",
        element: <User/>
      },
      {
        loader: githubInLoader,
        path: "Github",
        element: <Github/>
      }
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
