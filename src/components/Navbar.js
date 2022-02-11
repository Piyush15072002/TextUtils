import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            
                <li className="nav-item mx-5 ">
                  <a className="nav-link disabled mx-5 " href="#" tabIndex="-1" aria-disabled="true">
                    Welcome to TextUtils
                    </a>
                </li>
                </ul>
              
              
              <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
                <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className={`form-check-label`} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
              </div>
              <form className="d-flex mx-3">
                {/* fake button */}
                <a className="btn btn-outline-success" href="/">Refresh </a>
              </form>
              
            </div>
          </div>
        </nav>
    </>
    );
}

// proptyes
Navbar.protoTypes ={
  title: PropTypes.string.isRequired,
  aboutUs : PropTypes.string

}

// default props
Navbar.defaultProps = {
  title: 'Title here',
  aboutUs : 'About Us'
}
