
import React from "react";
import { Outlet } from "react-router-dom";

function News() {
  return (
    <div className="home">
      <div className="container">
        <h1 className="text-center mt-5">News page</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default News;