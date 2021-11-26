import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  About,
  Contact,
  News,
  Articles,
  Article,
  Footer,
} from "./components";
ReactDOM.render(
  <Router>
    <div id="content">
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
        
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<News />}>
        <Route path="" element={<Articles />} />
        <Route path=":postSlug" element={<Article />} />
      </Route>
    </Routes>
    <Footer />
    </div>
  </Router>,

  document.getElementById("root")
);