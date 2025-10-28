import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">CyberInsights Training App</h1>

    <p className="lead">
      This is a sample application built with <a href="https://reactjs.org">React.js</a> 
      that demonstrates an authentication flow for a single page app using Auth0
    </p>
  </div>
);

export default Hero;
