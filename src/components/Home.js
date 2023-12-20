import React from "react";
import { Link } from "react-router-dom";

const  Home=() =>{
  return (  
  <div className="content" style={{ height: "100vh" }}>
  <nav className="navbar navbar-expand-lg navbar-dark ">
    <div className="container px-5">
      <a className="navbar-brand" href="#!">
        Tech Quiz
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <main className="main py-5 d-flex align-items-center justify-content-center">
    <div className="container px-5">
      <div className="gx-5 ">
          <div className="text-center my-5">
                <h1 className=" fw-bolder text-white mb-3">
                  Recruiters, your technical tests are here.
                </h1>
                <p className="lead text-white mb-4">
                    Validate the technical skills of your candidates with just one
                    click, allowing you to focus on the human aspect
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                    <Link to ="/quiz" className="btn btn-outline-light btn-lg px-4" >
                        Start now
                    </Link>
               </div>
          </div>
      </div>
    </div>
  </main>
</div>);
}

export default Home;
