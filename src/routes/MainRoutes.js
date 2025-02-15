import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/product/AddProduct";
import Home from "../pages/Home";
import EditProduct from "../components/product/EditProduct";

const MainRoutes = () => {
  const routes = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/Admin",
      element: <AddProduct />,
      id: 2,
    },
    {
      link: "/Login",
      element: "",
      id: 3,
    },
    {
      link: "/Cart",
      element: "",
      id: 4,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 5,
    },
  ];
  return (
    <Routes>
      {routes.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
