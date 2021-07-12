
import Axios from "axios";
import React, {useState, useEffect} from 'react';
import {Buttons, Forms, Grid, FormControl, Accordion} from "react-bootstrap";
import  { Redirect, useHistory  } from 'react-router-dom'
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { Helmet } from 'react-helmet'




const url = window.location.href
  if(url.includes("localhost:3000/change–password")){
    require("./design.css")
}
function Changepw() {
    let history = useHistory();

    const [password, setPassword] = useState("")
    const [repeatpassword, setRepeatPassword] = useState("")
    const [errormsg, setErrorMsg] = useState("");
    const [succesMsg, setSuccesMsg] = useState("");
    
    let process = (new URLSearchParams(window.location.search)).get("process")
    const location = useLocation();
    
    const id = queryString.parse(location.search);
    

    
    //Check if URL is VALID 
    Axios.post("http://localhost:3001/api/changepwauth", {
        process: id,
    }).then((response)  => {
        if(response.data.error){
          //If not direct to this url:
            history.push('')
        }
    });




    const change = (e) =>{
      e.preventDefault();
      setErrorMsg("");
      setSuccesMsg("");

        Axios.post("http://localhost:3001/api/changepw", {
          password: password,
          repeatpassword: repeatpassword,
          process: id,
        }).then((response)  => {
            if(response.data.error){
                setErrorMsg(response.data.error);
            }else{
                setSuccesMsg(response.data.succes);
                setTimeout(function(){
                  history.push(
                    "/login/"
                  )
                }, 2000)
                
            }
      });
    };
    return (
      <>
        <Helmet>
          <title>Change Password</title>
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
                    <h4 className="card-title">Login to Privel</h4>
                      <div className="form-group">
                        <label htmlFor="name">New Password</label>
                        <input id="name" type="text" className="form-control" name="name" required autofocus  onChange={(e) => {setPassword(e.target.value)}}/>
                        <div className="invalid-feedback">
                          {errormsg}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Repeat Password</label>
                        <input id="name" type="text" className="form-control" name="name" required autofocus  onChange={(e) => {setRepeatPassword(e.target.value)}}/>
                        <div className="invalid-feedback">
                          {errormsg}
                        </div>
                      </div>
                      <div className="form-group m-0">
                        <button type="submit" className="btn btn-primary btn-block" color="#16DF7E" onClick={change}>
                          Change Password
                        </button>
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
  
  export default Changepw;
  