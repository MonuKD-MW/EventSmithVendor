'use client';

import { FaSquareFacebook } from 'react-icons/fa6';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import logoWithoutName from '../../assets/logo-without-name.jpeg'
import {Link} from 'react-router-dom';
import '../../style/MainFooter.css'; // Import the CSS file

const MainFooter = () => {
  const location = 'Canada';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        {/* Main Content */}
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-logo-description">
            <div className="logo-container">
              <Link href="/">
                <img
                  src={logoWithoutName}
                  alt="Company Logo"
                  width={101}
                  height={101}
                  className="logo-image"
                />
              </Link>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          {/* Links Container */}
          <div className="footer-links-container">
            {/* Company Links */}
            <div className="footer-links">
              <h2 className="footer-title">Company</h2>
              <ul className="links-list">
                <li><Link href="/about" className="footer-link">About Us</Link></li>
                <li><Link href="/terms" className="footer-link">Legal Information</Link></li>
                <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
              </ul>
            </div>

            {/* Vendors Links */}
            <div className="footer-links">
              <h2 className="footer-title">Vendors</h2>
              <ul className="links-list">
                <li><Link href="/vendors/venues" className="footer-link">Venues</Link></li>
                <li><Link href="/vendors/caterers" className="footer-link">Caterers</Link></li>
                <li><Link href="/vendors/event-planners" className="footer-link">Event Planners</Link></li>
                <li><Link href="/vendors/photographers" className="footer-link">Photographers</Link></li>
                <li><Link href="/vendors/videographers" className="footer-link">Videographers</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="footer-title">Contact Info</h2>
              <ul className="contact-list">
                <li className="contact-item">Phone: 1234567890</li>
                <li className="contact-item">Email: company@email.com</li>
                <li className="contact-item">Location: {location}</li>
              </ul>
              <div className="social-media-links">
                <Link href="#" aria-label="Facebook" className="social-icon">
                  <FaSquareFacebook size={24} />
                </Link>
                <Link href="#" aria-label="Twitter" className="social-icon">
                  <FaTwitter size={24} />
                </Link>
                <Link href="#" aria-label="Instagram" className="social-icon">
                  <AiOutlineInstagram size={24} />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="social-icon">
                  <BsLinkedin size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-hr"/>
        <div className="footer-copyright">
          <p>© {currentYear} | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
