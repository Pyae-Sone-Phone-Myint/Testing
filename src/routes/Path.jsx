import React from "react";
import { Route, Routes } from "react-router-dom";
import Home_page from "../pages/Home_page";
import CreateContact_page from "../pages/CreateContact_page";

const Path = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/create" element={<CreateContact_page />} />
      </Routes>
    </>
  );
};

export default Path;
