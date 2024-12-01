import "./App.css";

import Navbar from "./component/Navbar";

import { Routes, Route } from "react-router-dom";

import Package from "./component/Package.jsx";
import { Router } from "./Route/Route.js";

import Cart from "./component/Cart.jsx";
import Contactus from "./component/Contactus.jsx";

import Signin from "./component/Signin.jsx";

import Signup from "./component/Signup.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path={Router.PACKAGE} element={<Package />} />
        <Route path={Router.CART} element={<Cart />} />
        <Route path={Router.CONTACTUS} element={<Contactus />} />
        <Route path={Router.SIGNIN} element={<Signin />} />
        <Route path={Router.SIGNUP} element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
