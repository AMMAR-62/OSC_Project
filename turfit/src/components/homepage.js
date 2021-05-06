import React from "react";
import {} from "mdbreact";
import Header from "./header/header";
import Gallery from "./Gallery/Gallery";
import AboutUs from "./AboutUs/aboutUs";
import FAQ from "./FAQ";
import Pricing from "./Pricing/pricing";
export default function homepage() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Gallery />
      <Pricing />
      <FAQ />
    </div>
  );
}
