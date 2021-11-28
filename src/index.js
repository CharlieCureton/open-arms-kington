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
  OurStory,
  WhoWeAre,
  Funding,
} from "./components";
ReactDOM.render(
  <Router>
    <div id="content">
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/about/who-we-are" element={<WhoWeAre />} />
      <Route path="/about/our-story" element={<OurStory />} />
      <Route path="/about/funding" element={<Funding />} />
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