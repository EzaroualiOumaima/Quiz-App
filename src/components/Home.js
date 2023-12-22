import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="content" style={{ height: "100vh" }}>
     <div className="container px-5 text-white fs-4 pt-3">
           DevRecruit </div>
      <main className="main  py-5 d-flex align-items-center justify-content-between">
        <div className="container col-6 px-5">
          <div className="gx-5">
            <div className="text-center my-5">
              <h1 className="fw-bolder text-white mb-3">
                Recruiters, your technical tests are here.
              </h1>
              <p className="lead text-white mb-4">
                Validate the technical skills of your candidates with just one
                click, allowing you to focus on the human aspect.
              </p>
             
            </div>
          </div>
        </div>
        <form className="col-6 text-dark p-2 rounded "style={{ width: "40%", marginRight:"50px" ,backgroundColor:" rgba(240, 248, 255, 0.429)"}} >
        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <div className="mt-3 me-5 mb-3 ps-2">
            <label htmlFor="inputName " style={{color: 'white'}} className="form-label ">
              Full Name
            </label>
            <input
              type="text"
              id="inputName"
              className="form-control"
              aria-describedby="passwordHelpInline"
              
            />
          </div>
          <div className="mb-3 me-5 ps-2">
            <label htmlFor="inputEmail "  className="form-label ">
              Email
            </label>
            <input
              type="text"
              id="inputEmail"
              className="form-control"
              aria-describedby="passwordHelpInline"
              placeholder="example@example.com"
            />
          </div>
          
          <div className=" mb-3 me-5 ps-2">
            <label htmlFor="inputPassword"  className="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              aria-describedby="passwordHelpInline"
            />
          </div>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                <Link to={"/quiz"} className="btn btn-lg px-4 m-2 " style={{backgroundColor:"#346685", color:"white"}} >
                  Start Quiz
                </Link>
              </div>
        </form>
      </main>
    </div>
  );
};

export default Home;
