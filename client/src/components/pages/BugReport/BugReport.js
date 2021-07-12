

import Axios from "axios";

import Security from "./images/security.svg"
import Documents from "./images/documents.svg"
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-bootstrap-icons"
import React, {useState, useEffect} from 'react';


import { Helmet } from 'react-helmet'








const url = window.location.href
  if(url === "http://localhost:3000/bugreport"){
    require("./style.css")
    require("bootstrap/dist/css/bootstrap.min.css") 
    require("./bootstrap-icons.css")
}
  

function BugReport() {
    Axios.defaults.withCredentials = true;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    const [error, setErrorMsg] = useState("")
    const [succes, setSuccesMsg] = useState("")

    const sendreport = (e) =>{
      e.preventDefault()
      setErrorMsg("")
      setSuccesMsg("")
      Axios.post("http://localhost:3001/api/bugreports", {
        name: name,
        email: email,
        message: message,
        }).then((response)  => {
          if(response.data.error){
            setErrorMsg(response.data.error)
          }else{
            setSuccesMsg(response.data.succes)
          }
      });
    };

    useEffect(() => {
      Axios.get("http://localhost:3001/api/check", {
        }).then((response)  => {
            if(response.data.firstname){
              setName(response.data.firstname + "" + response.data.lastname)
              setEmail(response.data.email)
            }
      });
    }, [])

    return (
        <div>
          <Helmet>
          <title>Report a Bug</title>
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
            <h1 className="logo"><a href="./">Privel</a></h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto " href="./">Home</a></li>
                <li><a className="nav-link scrollto" href="./dashboard">Dashboard</a></li>
                <li><a className="nav-link scrollto active" href="./bugreport">Bug Report</a></li>
                <li><a className="getstarted scrollto" href="./login">Get Sarted</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}
          </div>
        </header>{/* End Header */}
        {/* ======= Hero Section ======= */}
        <br>
        </br>
        <br></br>
        <main id="main">
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
            <div className="container">
              <div className="section-title">
                <h2>Bug Report</h2>
                <p>Report a Bug you found</p>
              </div>
                {(() => {
                if (succes !== "") {
                  return (
                    <div class="success-msg">
                      <i class="fa fa-check"></i>
                        {succes}
                    </div>
                  )
                } 
              })()}
              {(() => {
                if (error !== "") {
                  return (
                    <div class="error-msg">
                      <i class="fa fa-check"></i>
                        {error}
                    </div>
                  )
                } 
              })()}
              <div className="row">
                <div className="col-lg-5 d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <i className="bi bi-geo-alt" />
                      <h4>Informations:</h4>
                      <p>Thank you for helping and improving Privel</p>
                    </div>
                    <div className="email">
                      <i className="bi bi-envelope" />
                      <h4>For other questions please write:</h4>
                      <p>privel@support-privel.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" required defaultValue={name} onChange={(e) => {setName(e.target.value)}}/>
                      </div>
                      <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label htmlFor="name">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" required defaultValue={email} onChange={(e) => {setEmail(e.target.value)}}/>
                      </div>
                    </div>

                    <div className="form-group mt-3">
                      <label htmlFor="name">Message</label>
                      <textarea className="form-control" name="message" rows={10} required defaultValue={""} onChange={(e) => {setMessage(e.target.value)}} />
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit" onClick={sendreport}>Send BugReport</button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>{/* End Contact Section */}
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
  
  export default BugReport;
  