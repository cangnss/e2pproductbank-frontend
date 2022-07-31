import "./App.css";
import { StyledEngineProvider } from "@mui/material";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Sss from "./pages/Sss";
import ProductDetail from "./components/Products/ProductDetail";
import ProductLayout from "./components/Products";
import Admin from "./components/Admin/Admin";
import ProductUpdate from "./components/Admin/ProductUpdate";
import AdminLayout from "./components/Admin/AdminLayout";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<ProductLayout />}>
            <Route index={true} element={<Products />} />
            <Route path=':id' element={<ProductDetail />} />
          </Route>
          <Route path="/SSS" element={<Sss />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index={true} element={<Admin />} />
            <Route path='/admin/update/:id' element={<ProductUpdate />}/>
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
