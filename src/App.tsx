import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useEffect } from "react"
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
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "productsdetails/:id", element: <ProductsDetails /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Home /> }
    ]
  }
])

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    if (currentLang === 'ar') {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [i18n.language]);

  return (
    <>

      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  )
}

export default App