import "./App.scss";
import Home from "./Pages/Home/Home";
import Naav from "./Components/Nav/Naav";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <Naav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetail />} />

        </Routes>
      </div>

      <ToastContainer position="top-right" />
      <ToastContainer />
    </div>
  );
}

export default App;