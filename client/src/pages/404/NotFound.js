
import Axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-bootstrap-icons"
import React, {useState, useEffect} from 'react';
import notfound from "./images/404.svg"
import {matchPath} from "react-router"


import { Helmet } from 'react-helmet'






const url = window.location.href
  if(!url .includes("http://localhost:3000/dashboard" || !url.includes("http://localhost:3000/settings" || !url.includes("http://localhost:3000/settings")))){
    require("./style.css")
    require("bootstrap/dist/css/bootstrap.min.css") 
    require("./bootstrap-icons.css")
}
  

function NotFound() {
    Axios.defaults.withCredentials = true;
    

    return (
      <div>
        <Helmet>
          <title>404</title>
        </Helmet>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content name="description" />
      <meta content name="keywords" />
      {/* Favicons */}
      <link href="assets/img/favicon.png" rel="icon" />
      <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
      {/* Vendor CSS Files */}
      <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
      <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
      <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
      <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
      {/* Template Main CSS File */}
      <link href="assets/css/style.css" rel="stylesheet" />
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo"><a href="index.html">Privel</a></h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="./dashboard">Dashboard</a></li>
              <li><a className="nav-link scrollto" href="./bugreport">Bug Report</a></li>
              <li><a className="getstarted scrollto" href="./login">Get Sarted</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>{/* .navbar */}
        </div>
      </header>{/* End Header */}
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>404</h1>
              <h2>OOPS, we could not find this website...</h2>
              <div className="d-flex">
                <a href="./" className="btn-get-started scrollto">Go Back</a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={notfound} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>{/* End Hero */}
    </div>
    );
  }
  
  export default NotFound;
  