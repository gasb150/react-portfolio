// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../assets/images/icon/android-chrome-192x192.png';
import '../Styles/images.css';

const Header = () => (
  <div className="bg-light border-bottom">
    <nav className="navbar navbar-expand-lg container navbar-light m-auto pt-2 pb-3 h3 ">
      <div className="container-fluid">
        <a className="navbar-brand link-dark" href="/"><img src={logo} alt="logo" className="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link link-dark" href="#hello">Hello</a>
          </li>

          <li className="nav-item">
            <a className="nav-link link-dark" href="#portfolio">Portfolio</a>
          </li>

          <li className="nav-item">
            <a className="nav-link link-dark" href="#about">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link link-dark" href="#contact">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  </div>

);

export default Header;
