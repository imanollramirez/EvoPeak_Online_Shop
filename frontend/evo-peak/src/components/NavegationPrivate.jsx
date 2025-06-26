// components/NavegationPrivate.jsx
import React, { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";

import Wishlist from "../screens/wishlist.jsx";
import Shoppingcar from "../screens/shoppingcar.jsx";
import ProductsAdmin from "../screens/private/ProductsAdmin.jsx";
import PaymentProcess from "../screens/paymentProcess.jsx";
import Welcome from "../screens/private/Welcome.jsx";
import OrdersPending from "../screens/private/OrdersPending.jsx";
import Employees from "../screens/private/EmployeesAdmin.jsx";
import UserAdmin from "../screens/private/UserAdmin.jsx";

import PrivateRoute from "./PrivateRoute.jsx";

export default function NavegationPrivate() {


  return (
    <>
      <Route element={<PrivateRoute />}>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shoppingcar" element={<Shoppingcar />} />
        <Route path="/productsAdmin" element={<ProductsAdmin />} />
        <Route path="/paymentProcess" element={<PaymentProcess />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/ordersPending" element={<OrdersPending />} />
        <Route path="/employeesAdmin" element={<Employees />} />
        <Route path="/UserAdmin" element={<UserAdmin />} />
      </Route>
    </>
  );
}