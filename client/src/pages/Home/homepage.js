

import Axios from "axios";
import React, {useState, useEffect} from 'react';
import Security from "./images/security.svg"
import Documents from "./images/documents.svg"
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-bootstrap-icons"
import saving from "./images/saving.svg"
import everywhere from "./images/everywhere.svg"
import  { useHistory  } from 'react-router-dom'






const url = window.location.href
  if(url === "http://localhost:3000/"){
    require("./style.css")
    require("bootstrap/dist/css/bootstrap.min.css") 
    require("./bootstrap-icons.css")
}
  

function Homepage() {
    let history = useHistory();
    const [buttontext, setButtonText] = useState("")
    Axios.defaults.withCredentials = true;
    useEffect(() => {
      Axios.get("http://localhost:3001/api/check", {
        }).then((response)  => {
            if(response.data.error){
                setButtonText("Login")
            }else{
              setButtonText("Logout")
            }
      });
    }, [])



    useEffect(() => {
      Axios.post("http://localhost:3001/api/iptest", {
        }).then((response)  => {
      });
    }, [])

    const destroyCookie = () =>{
      Axios.post("http://localhost:3001/api/destroycookie", {
        }).then((response)  => {
          history.push("/login")
      });
    };

    return (
        <div>
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
            <h1 className="logo"><a href="./">Privel</a></h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="./dashboard">Dashboard</a></li>
                <li><a className="nav-link scrollto" href="./bugreport">Bug Report</a></li>
                {(() => {
                  if (buttontext !== "Logout") {
                    return (
                      <li><a className="getstarted scrollto" href="./login">{buttontext}</a></li>
                    )
                  } 
                })()}
                {(() => {
                  if (buttontext === "Logout") {
                    return (
                      <li><a className="getstarted scrollto" onClick={destroyCookie}>{buttontext}</a></li>
                      )
                  } 
                })()}
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
                <h1>Elegant and creative solutions</h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <div className="d-flex">
                  <a href="./login" className="btn-get-started scrollto">Get Started</a>
                  <a href="https://www.youtube.com/privel" className="glightbox btn-watch-video"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                <img src={Security} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>{/* End Hero */}
        <main id="main">
        <section id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                      <img src={Documents} className="img-fluid" alt="" />
                    </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>Safe,Edit and Share your Documents</h3>
                    <p className="fst-italic">
                        With Privel you can
                    </p>
                      <ul>
                        <li><i className="bi bi-check-circle" /> Share, Edit and Change your Documents</li>
                        <li><i className="bi bi-check-circle" /> Highest Security standards like 2-FA</li>
                        <li><i className="bi bi-check-circle" /> Full encrypted with all your data</li>
                      </ul>
                      <p>
                        Privel is 24/7 for you online and we are working 24/7 on improving our services
                      </p>
                    </div>
                  </div>
                </div>
              </section>{/* End About Section */}
          {/* ======= Services Section ======= */}
          <section id="services" className="services section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Services</h2>
                <p>Enjoy our Services:</p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="icon-box">
                    <div className="icon"><i className="bx bxl-dribbble" /></div>
                    <img src={Security} className="img-fluid animated" alt="" />
                    <br></br>
                    <h4><a href>Highest Securty</a></h4>
                    <p>We are working 24/7 to improve our security</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div className="icon-box">
                    <div className="icon"><i className="bx bx-file" /></div>
                    <img src={saving} className="img-fluid animated" alt="" />
        	        <br></br>
                    <br></br>
                    <h4><a href>Auto Saving</a></h4>
                    <p>No need to save every word because of our auto saving tool</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                  <div className="icon-box">
                    <div className="icon"><i className="bx bx-tachometer" /></div>
                    <img src={everywhere} className="img-fluid animated" alt="" />
        	        <br></br>
                    <br></br>
                    <h4><a href>24/7 reachable</a></h4>
                    <p>You can view,change or edit your documents from everywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Services Section */}

          {/* ======= Cta Section ======= */}
          <section id="cta" className="cta">
            <div className="container">
              <div className="text-center">
                <h3>Information</h3>
                <p> We are currently not a big team so some problems might happen</p>
                <a className="cta-btn" href="./team">Learn More</a>
              </div>
            </div>
          </section>{/* End Cta Section */}
          {/* ======= Team Section ======= */}
        </main>{/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">


          <div className="container footer-bottom clearfix">
            <div className="copyright">
              © Copyright <strong><span>eNno</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/enno-free-simple-bootstrap-template/ */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>{/* End Footer */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
      </div>
    );
  }
  
  export default Homepage;
  