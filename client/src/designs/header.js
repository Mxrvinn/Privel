import React, {useState, useEffect} from "react";
import Axios from "axios";
import "./app.css"
import {Buttons, Forms, NavItem, Navbar, Button, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">   </a>
            <a class="navbar-brand" href="#">Docb</a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="/home">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/friends">Friends</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/dashboard">Dashboard</a>
            </li>
            </ul>
        </div>
        </nav>
    <br></br>

    </div>
    
  );
}
export default Header;