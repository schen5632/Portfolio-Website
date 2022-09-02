import React from "react";
import "./header.css";
import PIC from "../../assets/Capture.PNG";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div class="container-header">
      <div class="name-header">Stephen's Portfolio</div>
      <div class="sections-header">
        <a class="nav-link">Projects </a>
        <a class="nav-link">Experience</a>
        <a class="nav-link">Technologies</a>
        <a class="nav-link">About</a>
        <a class="nav-link">Contact</a>
      </div>
      <div class="social-header">
        <a href="https://linkedin.com" target="_blank" class="social-icons">
          <BsLinkedin size="2vw" />
        </a>
        <a href="https://github.com" target="_blank" class="social-icons">
          <BsGithub size="2vw" />
        </a>
      </div>
      {/*
        <div className="picture">
          <img src={PIC} alt="picture" />
        </div> */}
    </div>
  );
};

export default Header;
