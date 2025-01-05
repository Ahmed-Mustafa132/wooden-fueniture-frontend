import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import Home from "./assets/Pages/Home/Home";
import Login from "./assets/Pages/login/Login";
import Register from "./assets/Pages/register/Register";
import Products from "./assets/Pages/Products/Products";
import Product from "./assets/Pages/Product/Product";
import CreateProduct from "./assets/Pages/CreateProduct/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
