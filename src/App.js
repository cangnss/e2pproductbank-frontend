import "./App.css";
import { StyledEngineProvider } from "@mui/material";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
