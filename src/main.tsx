import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.tsx'
import Contact from './routes/Contact.tsx'
import NotFound from './routes/NotFound.tsx'
import ContactDetails from './routes/ContactDetails.tsx'

// const router: any = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/contacts",
//     element: <Contact />
//   }
// ])

const router: any = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contacts",
        element: <Contact />
      },

      // nested routes // dynamic routes with id
      {
        path: "/contact/:id",
        element: <ContactDetails />
      },
      // navigate to inexistent pages
      {
        path: "/oldcontact",
        element: <Navigate to="/contacts" />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
