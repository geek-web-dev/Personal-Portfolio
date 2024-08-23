import React, { useState } from "react";
import { addThemeControler, defaultMode } from "./data";

// internal css files
import "./css/circular_progress.css";
import "./css/main.css";
import "./css/global.css";
import "./css/menu-icon.css";
import "./css/box.css";

// external css files

// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";

//sections
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
// import Loader from './components/Loader'
import ThemeControler from "./components/ThemeControler";
import Footer from "./components/Footer";
import GoTopButton from "./components/GoTopButton";

const App = () => {
  const [isDark, setIsDark] = useState(defaultMode === "dark" ? true : false);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000)
  // }, [])

  return (
    <>
      {/* {loading ? <Loader /> : null} */}
      <div className={`app ${isDark ? "dark" : ""}`}>
        <Header />
        {addThemeControler ? (
          <ThemeControler mode={isDark} setMode={setIsDark} />
        ) : null}
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Testimonial />
        <Contact />

        <GoTopButton />
        <Footer />
      </div>
    </>
  );
};

export default App;
