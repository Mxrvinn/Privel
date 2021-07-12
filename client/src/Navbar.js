import React, { useState, useEffect } from 'react';
import appletouchpng from "./assets/img/apple-touch-icon.png"
import heroimg from "./assets/img/hero-img.png"
import aboutimg from "./assets/img/about.png"
import testimonialsimg from "./assets/img/testimonials/testimonials-1.jpg"
import testimonials2img from "./assets/img/testimonials/testimonials-2.jpg"
import testimonials3img from "./assets/img/testimonials/testimonials-3.jpg"
import testimonials4img from "./assets/img/testimonials/testimonials-4.jpg"
import testimonials5img from "./assets/img/testimonials/testimonials-5.jpg"
import security from "./assets/img/security.svg"
import documents from "./assets/img/documents.svg"


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return (
      window.removeEventListener("resize", showButton)
    )
    
  }, []);
  var path = require('path');
  var scriptName = path.basename(__filename);
  console.log(scriptName)
  if(scriptName == "index.js"){
    
  }
  require("./assets/vendor/bootstrap/css/bootstrap.min.css")
    require("./assets/vendor/bootstrap-icons/bootstrap-icons.css")

    require("./assets/css/style.css")
    require("./assets/img/favicon.png")
    require("./assets/img/apple-touch-icon.png")
  


  return (
    <>
      <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center justify-content-between">
            <h1 className="logo"><a href="index.html">Privel</a></h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                <li><a className="nav-link scrollto" href="#team">Team</a></li>
                <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
                  <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                      <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Drop Down 2</a></li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                  </ul>
                </li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}
          </div>
        </header>{/* End Header */}
    </>
  );
}

export default Navbar;
