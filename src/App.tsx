import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Certificate from "./pages/Certificate";
import Portfolio from "./pages/Portfolio";
import WebsiteView from "./components/feature/portfolio/WebsiteView";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/website/:name" element={<WebsiteView />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
