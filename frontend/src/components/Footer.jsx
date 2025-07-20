import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Gali No 6, Basant Nagar, Phagwara, Punjab(India)</li>
            <li>nichenest@gmail.com</li>
            <li>+91 1234567890</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li to={"/"}>
              <Link>Home</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <span><FaSquareXTwitter /></span>
                <span>Twitter (X)</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <span><FaSquareInstagram /></span>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/sahilku6" target="_blank" rel="noopener noreferrer">
                <span><FaGithub /></span>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sahil612/" target="_blank" rel="noopener noreferrer">
                <span><FaLinkedin /></span>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved By Sahil
      </div>
    </>
  );
};

export default Footer;