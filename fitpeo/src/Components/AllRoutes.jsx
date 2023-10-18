import React from "react";
import { Routes,  Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "../Pages/Dashboard";
import Products from "../Pages/Produts";

const AllRoutes = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="/products" element={<Products/>}/>
        </Route>
        <Route path="login" element={<div>This is login</div>}/>
      </Routes>
  
  );
};

export default AllRoutes;
