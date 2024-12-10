'use client'

import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
import logo from '../../../public/logo.png';
// import LocationSelector from "@/components/utilsComponent/LocationSelector";
import { Menu, X } from 'lucide-react';
// import { useRouter } from 'next/navigation';
import {Link,Navigate} from 'react-router-dom';
import '../../style/Header.css';
import BecomeAVendor from "../../layouts/becomeAVendor/BecomeAVendor";


const Header = ({forBecomeVendor=false}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(forBecomeVendor)


  return (
    <header className={`main-header ${forBecomeVendor && "header-white-bg"}`}>
      {/* Top bar */}
      <div className={`top-bar ${forBecomeVendor && "for-become-vendor-top-bar for-become-vendor-top-bar-mobile"}`}>
        <div className="menu-button">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-menu-color">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className={`desktop-menu ${forBecomeVendor && "for-become-vendor-menu"}`}>
          <div className="location-selector-container">
            {/* <LocationSelector /> */}
           {!forBecomeVendor && <span className="hardcoded-location">Toronto, ON</span>}
          </div>
          <Link to={'/'}>
            <button className={forBecomeVendor ? "for-become-vendor-login-button" : "login-button" }>
              Login
            </button>
          </Link>
          {forBecomeVendor ? (
            <button className="signup-button">
              <Link to="/signup" className="mobile-login-link">Sign Up</Link>
            </button>
          ) : (
            <Link to="/becomevendor" >
              <button type="button" id="desktop-vendor-button">
                 Become a Vendor
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Main header content */}
      <div className={`header-content ${forBecomeVendor && "become-vendor-header-content"}`}>
        <div className={`logo-container ${forBecomeVendor && "become-vendor-logo-container"}`}>
          <img
            src='/logo.png'
            alt="EventSmith Logo"
            width={150}
            height={150}
            className="logo-image"
          />
          
        </div>
        {/* Center content */}
        <div className="center-content">
          <h1 id="header-title-id" className="header-title">
          {forBecomeVendor ? (
            /* Render content for Become Vendor */
            <div>
              {/* Add content specific to the "Become a Vendor" page here */}
              <span className={`header-text-color ${forBecomeVendor && "become-vendor-header-text-color"}`}>{"Let your customers find you!"}</span>
            </div>
          ) : (
            <>
              <span className="header-text-color">Discover</span>,{" "}
              <span className="header-text-color">Book</span>,{" "}
              <span className="header-text-color">Celebrate</span>!
            </>
          )}

            
          </h1>
          {/* Navigation */}
          {!forBecomeVendor && 
            <nav className="navigation">
              <Link href="/">Weddings</Link>
              <Link href="/">Social Events</Link>
              <Link href="/">Corporate Events</Link>
            </nav>
          }
          
        </div>
        {/* Right spacing to match left logo spaces */}
        <div className="right-spacing" />
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {/* <LocationSelector /> */}
            {!forBecomeVendor && <span className="hardcoded-location">Toronto, ON</span>}
            <Link to={'/'}>
            <button className={`mobile-login-button ${BecomeAVendor && "become-vendor-mobile-login-btn"}`}>
              Login
            </button>
            </Link>
            {forBecomeVendor ? (
               <Link to={"/signup"} className="mobile-login-link">
              <button className="mobile-login-button become-vendor-mobile-login-btn">
               Sign Up
              </button>
              </Link>
            ) : (
              <Link to="/becomevendor" className="mobile-vendor-button">
                Become a Vendor
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, isActive, children }) => (
  <Link
    href={href}
    className={`nav-link ${isActive ? 'active' : ''}`}
  >
    <span>{children}</span>
    <span className={`nav-link-underline ${isActive ? 'active' : ''}`} />
  </Link>
);

export default Header;