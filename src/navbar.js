import React from "react";
import './index.css'
const Navbar = () => {
    return (
        <div className="color">
        <img src="logo.png" className="logo"></img>
       
        <nav className="navbar navbar-expand-lg bg-body-tertiary float-end">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a>*/}
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
              {/* objective */}
              <li className="nav-item">
                <a className="nav-link" href="#why"><span className="nav-link-span">WhyUs</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span className="nav-link-span">Media</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact"><span className="nav-link-span">Contact Us</span></a>
              </li>
             </ul>
              </div>
              </div>
          
    
      </nav>
      
      </div>
      );
}
 
export default Navbar;