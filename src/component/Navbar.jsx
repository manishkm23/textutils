import React from "react";
// import { Link } from "react-router-dom";
export default function Navbar(props)
{
    return(
        <>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="menu">
            <div className="container-fluid">
              <href className="navbar-brand" href="#">{props.title}</href>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li> */}
                </ul>
                <ul className="d-flex" type="none">
                  <li><span className={`fa fa-sun-o p-2 text-${props.mode==='light'?'dark':'light'}`}></span></li>
                  <li>
                    <div className="form-check form-switch">
                      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    </div>
                  </li>
                  <li><span className={`fa fa-moon-o text-${props.mode==='light'?'dark':'light'}`}></span></li>
                </ul>
              </div>
            </div>
          </nav>
        </>
    )
}