import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import CreateProductPage from './pages/CreateProductPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ChatbotPage from './pages/ChatbotPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/chatbot",
    element: <ChatbotPage />,
  },
  {
    path: "/dashboard",
    element: <CreateProductPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header/> */}
    <RouterProvider router={router}/>
    {/* <Footer/> */}
  </React.StrictMode>,
)
