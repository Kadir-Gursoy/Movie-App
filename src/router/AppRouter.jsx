import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";

const AppRouter = () => {
  return <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />} />

        <Route element={<PrivateRoute />} >
          <Route path="/moviedetail/:id" element={<MovieDetail />} />

      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </div>;
};

export default AppRouter;