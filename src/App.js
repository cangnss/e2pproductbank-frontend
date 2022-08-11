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
import AddProduct from "./components/Admin/AddProduct";
import { SiteProvider, AuthProvider, ProductsProvider } from "../src/context";
import AddCategory from "./components/Admin/AddCategory";
import CategoryDetail from "./components/Categories/CategoryDetail";
import CategoryLayout from "./components/Categories";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <div className="App">
      <SiteProvider>
        <AuthProvider>
          <ProductsProvider>
            <StyledEngineProvider injectFirst>
              <Header />
              <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/products" element={<ProductLayout />}>
                  <Route index={true} element={<Products />} />
                  <Route path=":id" element={<ProductDetail />} />
                </Route>
                <Route path="/categories" element={<CategoryLayout />}>
                  <Route index={true} element={<Categories />} />
                  <Route path=":id" element={<CategoryDetail />} />
                </Route>
                <Route path="/SSS" element={<Sss />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index={true} element={<Admin />} />
                  <Route path="/admin/addproduct" element={<AddProduct />} />
                  <Route path="/admin/addcategory" element={<AddCategory />} />
                  <Route path="/admin/update/:id" element={<ProductUpdate />} />
                </Route>
                <Route path="*" element={<Page404 />} />
              </Routes>
              <Footer />
            </StyledEngineProvider>
          </ProductsProvider>
        </AuthProvider>
      </SiteProvider>
    </div>
  );
}

export default App;
