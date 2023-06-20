import React, { useState, useEffect } from "react";
import "./App.css";
import { Footer, Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, SignInPage, SignUpPage, Community } from "./pages";

const App = () => {

  const [user, setUser] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark" : ""}>
        <Navbar user={user} setUser={setUser} darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/community" element={<Community user={user} />} />
          <Route path="/about" element={<About user={user} />} />
          <Route path="/contact" element={<Contact user={user} />} />
          <Route path="/signin" element={<SignInPage user={user} setUser={setUser}  />} />
          <Route path="/signup" element={<SignUpPage user={user} setUser={setUser} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
