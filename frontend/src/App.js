import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/privateComponent";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />}></Route>
            <Route path="/update/:id" element={<UpdateProduct />}></Route>
            <Route path="/logout" element={<h1>Logout</h1>}></Route>
            <Route path="/profile" element={<h1>Profile</h1>}></Route>
            <Route path="/add" element={<AddProduct />}></Route>
          </Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
