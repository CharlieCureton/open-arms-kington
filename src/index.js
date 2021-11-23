import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  News,
  Articles,
  Article,
} from "./components";
ReactDOM.render(
  <Router>
    <div id="content">
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<News />}>
        <Route path="" element={<Articles />} />
        <Route path=":postSlug" element={<Article />} />
      </Route>
    </Routes>
    </div>
    <Footer />
  </Router>,

  document.getElementById("root")
);