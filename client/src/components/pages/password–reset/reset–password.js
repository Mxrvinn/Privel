import "./design.css"
import Axios from "axios";
import React, {useState, useEffect} from 'react';
import {Buttons, Forms, Grid, FormControl, Accordion} from "react-bootstrap";
import  { Redirect, useHistory  } from 'react-router-dom'
import { Helmet } from 'react-helmet'




const url = window.location.href
  if(url.includes("localhost:3000/reset–password")){
    require("./design.css")
}
  

function Login() {

    const [usernameoremail, setUsername] = useState("")
    const [errormsg, setErrorMsg] = useState("");
    const [succesMsg, setSuccesMsg] = useState("");


    const resetpassword = (e) =>{
      e.preventDefault();
      setErrorMsg("");
      setSuccesMsg("");

      Axios.post("http://localhost:3001/api/passwordreset", {
          username: usernameoremail,
      }).then((response)  => {
          if(response.data.error){
              setErrorMsg(response.data.error);
          }else{
              setSuccesMsg(response.data.succes);
          }
      });
    };
    return (
      <>
      <Helmet>
          <title>Reset Password</title>
        </Helmet>
        <div>
        <meta charSet="utf-8" />
        <meta name="author" content="Kodinger" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="css/my-login.css" />
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="card fat">
                {(() => {
                  if (succesMsg != "") {
                    return (
                      <div class="alert alert-success" role="alert">
                        {succesMsg}
                      </div>
                    )
                  } 
                })()} 
                {(() => {
                  if (errormsg != "") {
                    return (
                      <div class="alert alert-danger" role="alert">
                        {errormsg}
                      </div>
                    )
                  } 
                })()} 
                  <div className="card-body">
                    <h4 className="card-title">Reset your Password</h4>
                      <div className="form-group">
                        <label htmlFor="name">Your Username</label>
                        <input id="name" type="text" className="form-control" name="name" required autofocus  onChange={(e) => {setUsername(e.target.value)}}/>
                        <div className="invalid-feedback">
                          {errormsg}
                        </div>
                      </div>
                      <div className="form-group m-0">
                        <button type="submit" className="btn btn-primary btn-block" color="#16DF7E" onClick={resetpassword}>
                          Reset Password
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        Already have an account? <a href="./login">Login</a>
                      </div>
                  </div>
                </div>
                <div className="footer">
                  Privel Security Team
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      </>
    );
  }
  
  export default Login;
  