// components/NavegationPublic.jsx
import React from "react";
import { Route } from "react-router-dom";

import Index from "../screens/Index.jsx";
import Login from "../screens/Login.jsx";
import Products from "../screens/products.jsx";
import RecoverPassword from "../screens/RecoverPassword.jsx";
import ContactUs from "../screens/contactUs.jsx";
import Register from "../screens/Register.jsx";

export default function NavegationPublic() {
  return (
    <>
      <Route path="/" element={<Index />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/recoverPassword" element={<RecoverPassword />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/register" element={<Register />} />
    </>
  );
}
