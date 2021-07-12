
import Axios from "axios";
import React, {useState, useEffect} from 'react';
import "react-bootstrap";
import { useParams } from "react-router-dom"
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

import { Helmet } from 'react-helmet'

const url = window.location.href
  if(url.includes("settings")){
    require("./style.css")
    require("bootstrap/dist/css/bootstrap.min.css")
}

function Settings() {
    const { id: userid } = useParams()
    const [username, setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [website , setWebsite] = useState("")
    const [instagram , setInstagram] = useState("")
    const [twitter , setTwitter] = useState("")
    const [github , setGithub] = useState("")
    const [facebook, setFacebook] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [bio, setBio] = useState("")
    const [bio2, setBio2] = useState("")
    const [longbio, setlongbio] = useState("")

    const [succesMsg, setSuccesMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    
    Axios.defaults.withCredentials = true;

    


    const save = (e) =>{
      console.log(longbio)
      e.preventDefault();
      setErrorMsg("");
      setSuccesMsg("");
      Axios.post("http://localhost:3001/api/updateprofile", {
          firstbio : bio,
          secbio: bio2,
          firstname: firstname,
          lastname: lastname,
          website: website,
          github: github,
          twitter: twitter,
          instagram: instagram,
          facebook: facebook,
          email: email,
          longbio: longbio,
      }).then((response)  => {
          if(response.data.error){
              setErrorMsg(response.data.error);
          }else{
              setSuccesMsg(response.data.succes);
          }
      });
    };


    
    
    //Get Values for placeholders
    useEffect(() => {
      Axios.post("http://localhost:3001/api/settings", {
        id : userid,
        }).then((response)  => {
          if(response.data.error){
            console.log(response.data.error)
          }else{
            if(response.data.username){
              setUsername(response.data.username)
            }else{
              setUsername("UNKNOWN")
            }
            if(response.data.email){
              setEmail(response.data.email)
            }else{
              setEmail("UNKNOWN")
            }
            if(response.data.website){
              setWebsite(response.data.website)
            }else{
              setWebsite("UNKNOWN")
            }
            if(response.data.github){
              setGithub(response.data.github)
            }else{
              setGithub("UNKNOWN")
            }
            if(response.data.twitter){
              setTwitter(response.data.twitter)
            }else{
              setTwitter("UNKNOWN")
            }
            if(response.data.instagram){
              setInstagram(response.data.instagram)
            }else{
              setInstagram("UNKNOWN")
            }
            if(response.data.facebook){
              setFacebook(response.data.facebook)
            }else{
              setFacebook("UNKNOWN")
            }
            if(response.data.firstname){
              setFirstName(response.data.firstname)
            }else{
              setFirstName("UNKNOWN")
            }
            if(response.data.lastname){
              setLastName(response.data.lastname)
            }else{
              setLastName("UNKNOWN")
            }
            if(response.data.firstbio){
              setBio(response.data.firstbio)
            }else{
              setBio("UNKNOWN")
            }
            if(response.data.secbio){
              setBio2(response.data.secbio)
            }else{
              setBio2("UNKNOWN")
            }if(response.data.longbio){
              setlongbio(response.data.longbio)
            }else{
              setlongbio("UNKNOWN")
            }
          }
          
      });
    }, [])
    
    return (
      <div className="container">
        <Helmet>
          <title>Settings</title>
        </Helmet>
      <br/>
      <div className="main-body">
      {(() => {
        if (succesMsg !== "") {
          return (
            <div class="success-msg">
              <i class="fa fa-check"></i>
                {succesMsg}
            </div>
          )
        } 
      })()}
      {(() => {
        if (errorMsg !== "") {
          return (
            <div class="error-msg">
              <i class="fa fa-check"></i>
                {errorMsg}
            </div>
          )
        } 
      })()}

      
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
  
                <div className="d-flex flex-column align-items-center text-center">
                    <div className="mt-3">
                    <h4>{username}</h4>
                    <EditText  onChange={setBio} value={bio}/>
                    <EditText onChange={setBio2} value={bio2}/>
                  </div>
                </div>
                <hr className="my-4" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe me-2 icon-inline"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>Website</h6>
                    <EditText  onChange={setWebsite} value={website}/>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>Github</h6>
                    <EditText  onChange={setGithub} value={github}/>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter me-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>Twitter</h6>
                    <EditText  onChange={setTwitter} value={twitter}/>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram me-2 icon-inline text-danger"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>Instagram</h6>
                    <EditText  onChange={setInstagram} value={instagram}/>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</h6>
                    <EditText  onChange={setFacebook} value={facebook}/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <EditText  onChange={setFirstName} value={firstname}/>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  <EditText  onChange={setLastName} value={lastname}/>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <EditText  onChange={setEmail} value={email}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3" />
                </div>
              </div>
            </div>
            <br></br>
            <strong className="mb-0">Describe You</strong>
            <p>Long Description for you and your team</p>
            <div className="card">
              <div className="card-body">
                <div className="row mb-3">
                 <EditTextarea
                  name='textarea1'
                  rows={15}
                  onChange={setlongbio}
                  value={longbio}
                  style={{ fontSize: '16px' }}
                  />
                </div>
                <div className="row">
                  <div className="col-sm-3" />
                </div>
              </div>
            </div>                    
            </div>
          </div>
        </div>
      <div className="col-sm-9 text-secondary">
        <input type="button" className="btn btn-primary px-4" defaultValue="Save Changes" onClick={save}/>
      </div>
    </div>
            



      
    );
  }
  
  export default Settings;
  