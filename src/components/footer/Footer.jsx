import React from 'react';
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './footer.css';

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
     <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <ul className="footer-links">
              <li><Link to="/">FAQ</Link></li>
              <li><Link to="/">Investor Relations</Link></li>
              <li><Link to="/">Ways To Watch</Link></li>
              <li><Link to="/">Corporate Information</Link></li>
              <li><Link to="/">Netflix Originals</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul className="footer-links">
              <li><Link to="/">Help Center</Link></li>
              <li><Link to="/">Jobs</Link></li>
              <li><Link to="/">Terms Of Use</Link></li>
              <li><Link to="/">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul className="footer-links">
              <li><Link to="/">Account</Link></li>
              <li><Link to="/">Redeem Gift Cards</Link></li>
              <li><Link to="/">Privacy</Link></li>
              <li><Link to="/">Speed Test</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul className="footer-links">
              <li><Link to="/">Media Center</Link></li>
              <li><Link to="/">Buy Gift Cards</Link></li>
              <li><Link to="/">Cookie Preferences</Link></li>
              <li><Link to="/">Legal Notices</Link></li>
            </ul>
          </div>
        </div>
        <p className="footer-text">Question? Call (+251)947446216 </p>
      </footer>
  );
};

export default Footer;