import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-faded " style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }}>
          <span className="navbar-brand">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </span>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto" style={{ textAlign: 'center' }}>
              <li className="nav-item"><Link className="nav-link" to="/" style={{ color: 'white' }}>Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/About" style={{ color: 'white' }}>About</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;