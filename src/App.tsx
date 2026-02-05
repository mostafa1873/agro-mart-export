import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Products from "./components/Products/Products"
import ProductsDetails from "./components/ProductsDetails/ProductsDetails"
import Contact from "./components/Contact/Contact"
import { HelmetProvider } from "react-helmet-async"

const router = createBrowserRouter([
  {
    path: "/:lng",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "productsdetails/:id", element: <ProductsDetails /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Home /> }
    ]
  },
  {
    path: "/",
    element: <Navigate to="/en" replace />
  },
  {
    path: "*",
    element: <Navigate to="/en" replace />
  }
])

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App