import React, { useState ,Component} from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBIcon,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./Navbar.css";
import logoturf from "../resources/images/logoturfit.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./Signup and Login/signupandlogin";
export default function Navbar(){

  const [showNav, setShowNav] = useState(false);
  return (

    <MDBNavbar expand="lg" light style={{padding:"0px", position:"sticky"}}>
      <MDBContainer fluid style={{background: "#444444"}}>
        <MDBNavbarBrand href="#"><img src={logoturf} style={{width:"6vw"}}/></MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav className="justify-content-end" >
            <MDBNavbarItem >
              <MDBNavbarLink active aria-current="page" href="/" className="text-white spacing" >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/booknow" className="text-white spacing" >Book Now</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/pricing" className="text-white spacing"  >Pricing</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/contactus" className="text-white spacing" >Contact Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem >
              <MDBNavbarLink href="/login" className="text-white spacing"><div id="login">Login</div></MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
  
}
