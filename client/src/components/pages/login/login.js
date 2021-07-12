import Axios from "axios";
import React, {useState} from 'react';
import  { useHistory  } from 'react-router-dom'
import { Helmet } from 'react-helmet'



const url = window.location.href
  if(url.includes("Login")){
    require("./design.css")
    
}


function Login() {
    let history = useHistory();

    Axios.defaults.withCredentials = true;

    const [errormsg, setErrorMsg] = useState("");
    const [succesMsg, setSuccesMsg] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


  
    Axios.defaults.withCredentials = true;

    Axios.get("http://localhost:3001/api/check", {
        }).then((response)  => {
            if(!response.data.error){
                console.log(response.data.error)
                history.push('/dashboard')
            }
    });

    const login = (e) =>{
      e.preventDefault();
      setErrorMsg("");
      setSuccesMsg("");
      Axios.post("http://localhost:3001/api/login", {
          username: username,
          password: password,
      }).then((response)  => {
          if(response.data.error){
              setErrorMsg(response.data.error);
              console.log(response.data.error)
          }else{
              setSuccesMsg(response.data.succes);
              console.log(response.data.succes)
          }
      });
    };
    return (
      <>
      <Helmet>
          <title>Login</title>
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
                  if (succesMsg !== "") {
                    return (
                      <div class="alert alert-success" role="alert">
                        {succesMsg}
                      </div>
                    )
                  } 
                })()} 
                {(() => {
                  if (errormsg !== "") {
                    return (
                      <div class="alert alert-danger" role="alert">
                        {errormsg}
                      </div>
                    )
                  } 
                })()}
                <form onSubmit={login}>
                <div className="card-body">
                    <h4 className="card-title">Login to Privel</h4>
                      <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input id="name" type="text" className="form-control" name="name" required autofocus  onChange={(e) => {setUsername(e.target.value)}}/>
                        <div className="invalid-feedback">
                          {errormsg}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" className="form-control" name="password" required data-eye onChange={(e) => {setPassword(e.target.value)}} />
                      </div>
                      <div className="form-group m-0">
                        <button type="submit" className="btn btn-primary btn-block" color="#16DF7E" onClick={login}>
                          Login
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        Dont have a account? <a href="../register">Register</a>
                      </div>
                  </div>
                </form> 
                  
                </div>
                <div className="footer">
                  Copyright © 2021 — Privel
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
  