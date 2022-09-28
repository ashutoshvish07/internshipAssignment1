import React from "react";
import email from "../assets/email.png";
import sentMail from "../assets/sentMail.png";
const Home = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-2" style={{width:"90%",margin:"auto"}}>
      <div className="col">
        <div className="card bg-light">
          <div className="card-header bg-white ">
            <div className="row justifyContent-spacebetween">

            <div className="col-10 ">Email verification</div>
            <div className="col-2">
            <span className="fa-solid fa-earth-asia">
            </span> 
                 <b>esri</b>
            </div>
            </div>
          </div>
          <div className="card-body p-5">
            <img src={email} className="card-img" alt="email" />
            <div className="bg-white">
              <h5 className="card-title text-center">
                Your email has not been verified
              </h5>
              <p className="card-text text-center .text-secondary">
                send a verification email to xyz124@gma***.com
              </p>
              <div className="d-grid pt-3 m-4">
                <button className="btn btn-info text-white" type="button">
                  Send verification email
                </button>
              </div>

              <div className="text-center pb-3">
                <a
                  href=""
                  className="link text-info"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  Skip for now &nbsp;&nbsp; <span>&#10148;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-light pt-3">
          <div className="card-body p-5">
            <img src={sentMail} className="card-img " style={{width:"100%",height:"400px"}} alt="email" />
            <div className="bg-white">
              <h5 className="card-title text-center">
               An email has been send to you.
              </h5>
              <p className="card-text text-center" style={{width:"80%" ,margin:"auto",paddingBottom:"-2px"}}>
               Check the email that's associated with your account
               for the  verification code
              </p>
              <div className="  pt-3 m-4">
                <label  className="form-label">
                  Verification Code
                </label>
                <input
                  type="text"
                  className="form-control pl-2 pr-2"
                  placeholder="Enter otp"
                />
              </div>
              <div className="d-grid  m-4">
                <button className="btn btn-info text-white" type="button">
                  verify
                </button>
              </div>

              <div className=" text-center pb-2" style={{marginTop:"-10px"}}>
                <a
                  href=""
                  className="link text-info"
                  style={{ textDecoration: "none" }}>
                  {" "}
              send me another code
                </a>
              </div> <div className="text-center pb-2">
                <a
                  href=""
                  className="link text-info"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  Skip for now &nbsp;&nbsp; <span>&#10148;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
