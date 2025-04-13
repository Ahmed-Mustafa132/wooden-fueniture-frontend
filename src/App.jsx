import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Context/AuthContext";
import Navbar from "./assets/components/Navbar/Navbar";
import Home from "./assets/Pages/Home/Home";
import Login from "./assets/Pages/Login/Login";
import Register from "./assets/Pages/Register/Register";
import Products from "./assets/Pages/Products/Products";
import Product from "./assets/Pages/Product/Product";
import CreateProduct from "./assets/Pages/CreateProduct/CreateProduct";
import Footer from "./assets/components/Footer/Footer";
import Aboutme from "./assets/Pages/Aboutme/Aboutme";
import Contact from "./assets/Pages/Contact/Contact";
import Error from "./assets/Pages/Error/Error";
import Dashboard from "./assets/Pages/Dashboard/Dashbord";
import DashboardProducts from "./assets/Pages/Dashboard/DashboardProducts";
import DashboardOrders from "./assets/Pages/Dashboard/OrdersDashboard";
import Checkout from "./assets/Pages/Checkout/Checkout";1

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard">
              <Route index element={<Dashboard />} />
              <Route path="CreateProduct" element={<CreateProduct />} />
              <Route path="products" element={<DashboardProducts />} />
              <Route path="orders" element={<DashboardOrders />} />
              {/* 
              <Route path="users" element={<DashboardUsers />} />
              <Route path="categories" element={<DashboardCategories />} />
              <Route path="reviews" element={<DashboardReviews />} />
              <Route path="offers" element={<DashboardOffers />} /> */}
            </Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
