// components/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import NavbarAdmin from "./NavbarAdmin";
import Footer from "./footer";
import NotFound from "../screens/NotFound.jsx";

import NavegationPublic from "./NavegationPublic";
import NavegationPrivate from "./NavegationPrivate";

function NavbarSelector() {
  const { pathname } = useLocation();
  const noNavbarPaths = ["/Login", "/register", "/recoverPassword"];
  const adminPaths = [
    "/productsAdmin",
    "/welcome",
    "/ordersPending",
    "/employeesAdmin",
    "/UserAdmin",
  ];
  const publicPaths = [
    "/inicio",
    "/Login",
    "/products",
    "/recoverPassword",
    "/contactUs",
    "/register"
  ]

  const isNotFound = ![
    ...noNavbarPaths,
    ...adminPaths,
    ...publicPaths,
  ].some((path) => pathname.startsWith(path));

  if (noNavbarPaths.includes(pathname) || isNotFound) return null;
  if (adminPaths.includes(pathname)) return <NavbarAdmin />;
  return <Navbar />;
}

function FooterSelector() {
  const { pathname } = useLocation();
  const noFooterPaths = ["/Login", "/register", "/recoverPassword"];
  if (noFooterPaths.includes(pathname)) return null;
  return <Footer />;
}

export default function AppRoutes() {
  return (
    <>
      <NavbarSelector />

      <Routes>
        {NavegationPublic()}
        {NavegationPrivate()}
        <Route path="*" element={<NotFound />} replace />
      </Routes>

      <FooterSelector />
    </>
  );
}
