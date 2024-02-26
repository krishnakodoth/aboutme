import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgNpm } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">
          <span className="p-5">
            <a
              href="https://github.com/krishnakodoth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </span>
          <span className="p-5">
            <a
              href="https://www.npmjs.com/~krishnakodoth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgNpm />
            </a>
          </span>
          <span className="p-5">
            <a
              href="https://www.linkedin.com/in/krishnakodoth/"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FaLinkedin />
            </a>
          </span>
          <span className="p-5">
            <a
              href="https://www.instagram.com/krishnakodoth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="p-5">
            <a
              href="https://www.facebook.com/krishnakodoth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </span>
        </div>
        <div className="copy">
          <small> {new Date().getFullYear()} &copy; krishnakodoth </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
