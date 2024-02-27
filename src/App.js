import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Accommodation from "./pages/accommodation";
import Footer from "./components/footer";
// import CarouselPage from "./components/carouselPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* bar de navigation et logo */}
        <Header
          logoUrl="/images/LOGO.png"
          homeLink="home"
          homeText="Accueil"
          aboutLink="about"
          aboutText="A Propos"
        />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
        </Routes>
        {/*footer page d'accueil*/}
        <Footer
          imgFooter="/images/LOGO-footer.png"
          titleFooter="© 2020 Kasa. All rights reserved"
        />
        {/* <Routes path="./components/carouselPage" component={CarouselPage} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
