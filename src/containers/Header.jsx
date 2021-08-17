import React from 'react'
import logo from '../assets/images/icon/favicon-32x32.png'
const Header = () => (
 
    <nav className="navbar navbar-expand-lg w-50 m-auto h3">
      <div className="container-fluid">
        <a className="navbar-brand link-dark" href="/"><img src={logo} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">i</span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link link-dark" href="#hello">hello</a>
          </li>


          <li className="nav-item">
            <a className="nav-link link-dark" href="#portfolio">portfolio</a>
          </li>


          <li className="nav-item">
            <a className="nav-link link-dark" href="#about">about</a>
          </li>


          <li className="nav-item">
            <a className="nav-link link-dark" href="#about">about</a>
          </li>


          <li className="nav-item">
            <a className="nav-link link-dark" href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  
)

export default Header