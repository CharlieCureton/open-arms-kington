
import React from "react";
import { Outlet } from "react-router-dom";

function News() {
  return (
    <div id="wrapper">
      <div className="news">
        <div className="container">
          <h1 className="text-center mt-5">News page</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
document.querySelector('.dropdown').style.display = 'none';
export default News;