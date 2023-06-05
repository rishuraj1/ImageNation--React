import React from "react";
import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, SignInPage, SignUpPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
