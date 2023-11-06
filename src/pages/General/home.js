import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../img/BINARYT.png";

export default function Home() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <img className="flex" src={Logo} />
      <div className="row justify-content-center">
        <h1 class="text-center mp-auto w-100 mb-10">
          Welcome to Binary Themis
        </h1>
        <div className="col-md-6">
          <Link to="/patient" className="btn btn-lg btn-primary w-100 mb-3">
            New Case
          </Link>
          <Link to="/intranet" className="btn btn-lg btn-secondary w-100">
            Previous Case
          </Link>
        </div>
      </div>
    </div>
  );
}
