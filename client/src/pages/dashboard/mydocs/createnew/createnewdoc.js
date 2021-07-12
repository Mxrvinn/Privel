

import Axios from "axios";
import React, {useState} from 'react';
import  { useHistory  } from 'react-router-dom'
import docimage from "../../images/doc.png"
import Logo from "../../logo.png"


const url = window.location.href
  if(url.includes("localhost:3000/dashboard/newdoc/createnew")){
    require("./style.css")
}
function Login() {
    let history = useHistory();
    Axios.defaults.withCredentials = true;
    const [errormsg, setErrorMsg] = useState("");
    const [succesMsg, setSuccesMsg] = useState("");
    const [documentName , setDocumentName] = useState("");


    Axios.get("http://localhost:3001/api/check", {
        }).then((response)  => {
            if(response.data.error){
                console.log(response.data.error)
                history.push('/login')
            }
    });

    const destroyCookie = () =>{
      Axios.post("http://localhost:3001/api/destroycookie", {
        }).then((response)  => {
          history.push("/login")
      });
    };
    const findfriends = () =>{
      history.push("/friends")
    };

    const newEntry = (e) =>{
      e.preventDefault();
      setSuccesMsg("")
      setErrorMsg("")
      Axios.post("http://localhost:3001/api/newDocument", {
          docName: documentName,
      }).then((response)  => {
          if(response.data.error){
              setErrorMsg(response.data.error);
              console.log(errormsg)
          }else{
              setSuccesMsg(response.data.succes);
              setTimeout(function(){
                history.push(
                  "/documents/" + response.data.url
                )
              }, 2000)
              
          }
      });
    };
    return (
        <div className="app">
        <aside className="nav">
          <div className="burger">
            <span className="line" />
          </div>
          <div className="nav__logo">
            <img src={Logo} />
          </div>
          <ul className="menu">
            <li className="menu__item" onclick="location.href='http://localhost:3000/dashboard/overview';">
            
              <span className="menu__icon">
                <svg width={21} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.111 8.625a.71.71 0 00.497-.201l5.828-5.702 5.126 5.014a.71.71 0 00.994 0L19.88 1.55a.687.687 0 00.215-.489.674.674 0 00-.206-.492.705.705 0 00-.503-.201.717.717 0 00-.5.21l-5.828 5.7-5.126-5.013a.71.71 0 00-.994 0L.614 7.45a.683.683 0 00-.152.75.691.691 0 00.259.308.714.714 0 00.39.116zM14.113 13.438h-2.108a.348.348 0 00-.352.343v5.5c0 .19.157.344.352.344h2.108a.348.348 0 00.351-.344v-5.5a.348.348 0 00-.35-.344zM19.736 7.25h-2.109a.348.348 0 00-.351.344V19.28c0 .19.157.344.351.344h2.109a.348.348 0 00.351-.344V7.594a.348.348 0 00-.351-.344z" fill="#A4A8BD" />
                  <path d="M8.49 7.25H6.382a.348.348 0 00-.351.344V19.28c0 .19.157.344.351.344H8.49a.348.348 0 00.352-.344V7.594a.348.348 0 00-.352-.344zM2.868 13.438H.76a.348.348 0 00-.352.343v5.5c0 .19.157.344.352.344h2.108a.348.348 0 00.351-.344v-5.5a.348.348 0 00-.351-.344z" fill="#A4A8BD" />
                </svg> </span><a href="http://localhost:3000/dashboard/overview">OVERVIEW</a>
            </li>
            <li className="menu__item">
              <span className="menu__icon">
                <svg width={23} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.122 10.083h-1.406V5.958a.454.454 0 00-.137-.324.474.474 0 00-.663 0 .453.453 0 00-.137.324v4.125H9.373a.474.474 0 00-.33.135.453.453 0 00-.138.324v7.333c0 .122.05.238.137.324a.474.474 0 00.331.134h1.406v2.75c0 .122.05.239.137.324a.474.474 0 00.663 0 .453.453 0 00.137-.324v-2.75h1.406a.474.474 0 00.331-.134.453.453 0 00.137-.324v-7.333a.453.453 0 00-.137-.324.474.474 0 00-.331-.135zM5.625 3.208H4.219V1.833a.453.453 0 00-.137-.324.474.474 0 00-.662 0 .453.453 0 00-.138.324v1.375H1.877a.474.474 0 00-.332.135.453.453 0 00-.137.324v11c0 .121.05.238.137.324a.474.474 0 00.332.134h1.405v3.667c0 .121.05.238.138.324a.474.474 0 00.662 0 .454.454 0 00.137-.324v-3.667h1.406a.474.474 0 00.331-.134.454.454 0 00.138-.324v-11a.453.453 0 00-.138-.324.474.474 0 00-.331-.135zM20.618 6.417h-1.405V1.833a.454.454 0 00-.137-.324.474.474 0 00-.663 0 .453.453 0 00-.137.324v4.584H16.87a.474.474 0 00-.331.134.453.453 0 00-.137.324v10.542c0 .121.049.238.137.324a.474.474 0 00.331.134h1.406v2.292c0 .121.05.238.137.324a.474.474 0 00.663 0 .454.454 0 00.137-.324v-2.292h1.405a.474.474 0 00.332-.134.454.454 0 00.137-.324V6.875a.454.454 0 00-.137-.324.474.474 0 00-.332-.134z" fill="#A4A8BD" />
                </svg> </span><a href="http://localhost:3000/dashboard/mydocs/show?site=1">DOCUMENTS</a>
            </li>
            <li className="menu__item">
              <span className="menu__icon">
                <svg width={23} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.094 6.875c0-.434-.126-.858-.363-1.225a2.327 2.327 0 00-.976-.845 2.389 2.389 0 00-2.486.296c-.343.274-.6.638-.74 1.049-.14.411-.159.853-.053 1.274.106.421.332.804.652 1.104.32.3.72.506 1.154.593v2.832a3.37 3.37 0 01.469-.036c.157.001.313.013.468.036V9.121a2.347 2.347 0 001.293-.75l2.68 1.474c.114-.286.27-.555.461-.798L5.971 7.57c.078-.224.12-.46.123-.696zM19.213 12.88v-2.833c-.31.049-.627.049-.937 0v2.832a2.344 2.344 0 00-1.293.75l-2.68-1.474c-.113.286-.269.555-.46.798l2.68 1.476c-.077.224-.118.46-.122.696 0 .434.127.858.363 1.225.237.366.576.66.976.845a2.39 2.39 0 002.486-.296c.343-.274.6-.638.74-1.049.14-.411.159-.853.053-1.274a2.282 2.282 0 00-.652-1.104 2.36 2.36 0 00-1.154-.593zM15.808 16.893a3.195 3.195 0 01-.202-.416l-2.489 1.406a2.344 2.344 0 00-1.4-.879v-2.833c-.311.05-.628.05-.938 0v2.833a2.36 2.36 0 00-1.154.593c-.32.3-.546.683-.652 1.104-.106.42-.088.863.052 1.274.14.411.397.775.74 1.05a2.388 2.388 0 002.486.296c.401-.187.74-.48.976-.846.237-.367.363-.791.363-1.225a2.225 2.225 0 00-.07-.535l2.554-1.444a3.215 3.215 0 01-.266-.378zM6.688 5.107c.077.134.144.273.202.415l2.489-1.405c.34.45.839.764 1.4.879v2.833c.31-.049.627-.049.937 0V4.996a2.36 2.36 0 001.154-.593c.32-.3.546-.683.652-1.104a2.244 2.244 0 00-.052-1.274 2.291 2.291 0 00-.74-1.05A2.39 2.39 0 0010.243.68c-.4.187-.74.48-.976.846a2.255 2.255 0 00-.363 1.225c.002.18.026.36.071.535L6.422 4.73c.098.12.186.246.266.378zM11.248 13.292c1.294 0 2.343-1.026 2.343-2.292 0-1.266-1.05-2.292-2.343-2.292-1.294 0-2.343 1.026-2.343 2.292 0 1.266 1.05 2.292 2.343 2.292zM14.304 9.845l2.68-1.475c.31.348.719.597 1.175.713.456.117.937.096 1.381-.06.444-.156.829-.44 1.105-.814a2.25 2.25 0 00.066-2.583 2.326 2.326 0 00-1.062-.867 2.386 2.386 0 00-1.377-.128 2.353 2.353 0 00-1.21.655l-2.675-1.51a3.196 3.196 0 01-.202.415 3.21 3.21 0 01-.267.378l2.643 1.493a2.1 2.1 0 00-.037 1.509l-2.681 1.475c.192.243.347.512.46.799zM8.192 12.155l-2.68 1.475a2.346 2.346 0 00-1.175-.713 2.388 2.388 0 00-1.381.06c-.444.156-.83.44-1.105.814a2.25 2.25 0 00-.066 2.583c.256.387.627.69 1.062.867.435.177.915.222 1.376.128a2.353 2.353 0 001.21-.655l2.676 1.512c.057-.143.124-.282.202-.415.08-.132.169-.259.267-.379l-2.644-1.494a2.1 2.1 0 00.037-1.509l2.682-1.475a3.183 3.183 0 01-.46-.799z" fill="#A4A8BD" />
                </svg> </span><a href="http://localhost:3000/dashboard/teamdocs/show?site=1">TEAM DOCUMENTS</a>
            </li>
            <li className="menu__item">
              <span className="menu__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <g clipPath="url(#prefix__prefix__clip0)" fill="#A4A8BD">
                    <path d="M17.683 4.125a6.907 6.907 0 00-2.588-3.003 7.131 7.131 0 00-3.847-1.124c-1.367 0-2.705.39-3.848 1.124a6.906 6.906 0 00-2.588 3.003 4.974 4.974 0 00-3.463 1.448A4.758 4.758 0 00-.053 8.99a4.763 4.763 0 001.48 3.388 4.979 4.979 0 003.495 1.371h12.651a4.978 4.978 0 003.495-1.371 4.762 4.762 0 001.48-3.388 4.758 4.758 0 00-1.402-3.418 4.974 4.974 0 00-3.463-1.448zM11.95 18.002v-2.877h-1.405v2.877a2.099 2.099 0 00-1.116.9 2.025 2.025 0 00.46 2.621c.38.314.861.486 1.359.486.497 0 .978-.172 1.359-.486.38-.314.635-.749.719-1.228a2.025 2.025 0 00-.26-1.393 2.1 2.1 0 00-1.116-.9zm-7.028-2.877v1.783L3.74 18.093a2.155 2.155 0 00-2.205.19c-.37.268-.64.646-.771 1.077-.131.431-.115.893.045 1.315.16.421.456.781.843 1.024a2.16 2.16 0 002.543-.183 2.06 2.06 0 00.681-1.134c.096-.44.042-.899-.152-1.307l1.406-1.408a.68.68 0 00.198-.48v-2.062H4.922zm14.759 2.75a2.124 2.124 0 00-.926.218l-1.182-1.185v-1.783h-1.406v2.063c0 .18.071.352.2.48l1.405 1.409c-.19.405-.24.86-.144 1.296.096.436.334.83.679 1.122a2.144 2.144 0 002.523.177c.383-.242.676-.598.835-1.016a2.02 2.02 0 00.045-1.304 2.064 2.064 0 00-.762-1.069 2.14 2.14 0 00-1.267-.408z" />
                  </g>
                  <defs>
                    <clipPath id="prefix__prefix__clip0">
                      <path fill="#fff" transform="translate(.003)" d="M0 0h22.49v22H0z" />
                    </clipPath>
                  </defs>
                </svg> </span><a href="http://localhost:3000/dashboard/cloudstorage/1">CLOUD STORAGE</a>
            </li>
            <li className="menu__item">
              <span className="menu__icon">
                <svg width={23} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.779 10.588L1.877 6.004v9.992c0 .167.046.33.135.473.088.143.214.26.366.338l8.401 4.322V10.587zM11.248 9.795l8.902-4.583L11.68.907a.954.954 0 00-.864 0l-8.47 4.304 8.902 4.584zM11.716 10.588v10.541l8.402-4.326a.929.929 0 00.365-.335.902.902 0 00.135-.472V6.004l-8.902 4.584z" fill="#A4A8BD" />
                </svg> </span><a href="../../settings">SETTINGS</a>
            </li>
          </ul>
          <div className="nav__logout">
          <a className="nav__link" onClick={(e) => {destroyCookie(e.target.value)}}>
              <span className="icon">
                <svg width={19} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.736 7.5h-4.6v3h4.6V15l7.668-6-7.668-6v4.5z" fill="#A4A8BD" />
                  <path d="M3.07 3h6.133V0H3.069C2.256 0 1.476.316.901.879A2.967 2.967 0 00.003 3v12c0 .796.323 1.559.898 2.121A3.102 3.102 0 003.069 18h6.134v-3H3.069V3z" fill="#A4A8BD" />
                </svg> </span>Logout</a>
          </div>
        </aside>
        <main className="main">
          <header className="main__header">
            <div className="main__search">
              <input type="search" size={25} placeholder="Find Friends" onClick={findfriends} />              
              <span className="icon-search">
                <svg width={17} height={17} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.494 12.006a7.275 7.275 0 001.487-4.462C14.981 3.4 11.688 0 7.544 0S0 3.4 0 7.544s3.4 7.544 7.544 7.544c1.7 0 3.294-.532 4.462-1.488l3.188 3.188c.212.212.531.318.743.318.213 0 .532-.106.744-.319a1.027 1.027 0 000-1.487l-3.187-3.294zm-5.95.85c-2.975 0-5.419-2.337-5.419-5.312s2.444-5.419 5.419-5.419c2.975 0 5.419 2.444 5.419 5.419 0 2.975-2.444 5.312-5.42 5.312z" fill="#A4A8BD" />
                </svg>
              </span>
            </div>
            <div className="main__user">
              <span className="main__icon">

              </span>
              <div className="main__title">
              </div>
            </div>
          </header>
          <div className="team">
            <h1>Create new Document</h1>
            <div className="team__setting">
              

            </div>
          </div>
          <div className="cards">
        
          
          <div className="card">
            {(() => {
              if (succesMsg !=="") {
                return (
                  <div class="success-msg">
                    <i class="fa fa-check"></i>
                    {succesMsg}
                  </div>
                )
              } 
            })()}
            {(() => {
              if (errormsg !== "") {
                return (
                  <div class="error-msg">
                    <i class="fa fa-circle"></i>
                    {errormsg}
                  </div>
                )
              } 
            })()} 
                    <a href="/documents/" className="anotext">
                    </a>
                      <header className="card__header">
                        <div className="card__img">
                          <img src={docimage} alt="avatar" />
                        </div>
                        <div className="card__name">
                          <h6>Create a New Document</h6>
                          <span>You can later add Teams to this Document</span>
                        </div>
                      </header>
                      <div className="card__body">
                        <div className="stats">
                        <form class="form-inline" onSubmit={newEntry}>
                          <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">Password</label>
                            <input 
                              type="text" 
                              class="form-control" 
                              id="inputPassword2" 
                              placeholder="My New Document"
                              onChange={(e) => {
                                setDocumentName(e.target.value)
                             }}/>
                          </div>
                          <br></br>
                          <button type="submit" class="btn btn--primary" onclick={newEntry}>Create New Document</button>
                        </form>
                        </div>
                      </div>
                    </div> 
          </div>
        </main>
      </div>
    );
  }
  
  export default Login;
  