import React from "react";
import './index.css'
const Navbar = () => {
    return (
        <div className="color row">
        <div className="col-md-3">
        <img src="logo.png" className="logo"></img>
        </div>
       <div className="col-md-9">
        <nav className="navbar navbar-expand-lg  float-end">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><span className="nav-link-span">Home</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#benefits"><span className="nav-link-span">Benefits</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cards"><span className="nav-link-span">Vision-Mission</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why"><span className="nav-link-span">Why Us</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact"><span className="nav-link-span">Contact</span></a>
              </li>
             </ul>
              </div>
              </div>
          
    
      </nav>
      </div>
      </div>
      );
}
 
export default Navbar;