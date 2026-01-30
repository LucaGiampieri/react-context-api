//import delle rotte da reat-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom"

//import delle pages da inserire nelle rotte
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import ProductDetail from "./products/ProductDetail"
import Cart from "./pages/Cart"

//import del DefaultLayout
import DefaultLayout from "./component/layots/DefaultLayout"

//import pagina error
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
