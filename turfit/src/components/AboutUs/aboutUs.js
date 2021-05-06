import React from "react";
import src1 from "../../resources/images/About-us-3.jpg";
import "./about.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBTypography,
  MDBIframe,
} from "mdbreact";
export default function AboutUs() {
  return (
    <MDBContainer style={{ margin: "2rem" }}>
      <MDBTypography variant="h2">About Us</MDBTypography>
      <MDBContainer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={src1} style={{ width: "30vw" }} alt="" />
        <MDBTypography variant="h6" style={{ marginLeft: "2rem" }}>
          SCORE is a sports infrastructure and development company that builds,
          owns and operates sports facilities for grassroots development of
          sports in India. Score is constantly evolving and with the technical
          backing of MarwahSphere,aims to be the premier player in the Sports
          Infrastructure and Education sector in India. VISION: We aim to be the
          leading Sports Infrastructure and Education company in India,
          empowering India to become a sporting powerhouse. MISSION: We want to
          provide young footballers across the country with the best sporting
          facilities and education to hone their game, thus enabling and
          encouraging them to embrace a sporting culture.
        </MDBTypography>
      </MDBContainer>
    </MDBContainer>
  );
}
