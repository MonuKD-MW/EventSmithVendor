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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const router = useRouter();
  const navigate = () => { 
    router.push('/login');
  };

  return (
    <header className="main-header">
      {/* Top bar */}
      <div className="top-bar">
        <div className="menu-button">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-menu-color">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="desktop-menu">
          <div className="location-selector-container">
            {/* <LocationSelector /> */}
            <span className="hardcoded-location">Toronto, ON</span>
          </div>
          <button className="login-button" onClick={navigate}>
            Login
          </button>
          <button className="vendor-button">
            Become a Vendor
          </button>
        </div>
      </div>

      {/* Main header content */}
      <div className="header-content">
        <div className="logo-container">
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
          <h1 className="header-title">
            <span className="header-text-color">Discover</span>,{" "}
            <span className="header-text-color">Book</span>,{" "}
            <span className="header-text-color">Celebrate</span>!
          </h1>
          {/* Navigation */}
          <nav className="navigation">
            <Link href="/">Weddings</Link>
            <Link href="/">Social Events</Link>
            <Link href="/">Corporate Events</Link>
          </nav>
        </div>
        {/* Right spacing to match left logo spaces */}
        <div className="right-spacing" />
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {/* <LocationSelector /> */}
            <span className="hardcoded-location">Toronto, ON</span>
            <button className="mobile-login-button">
              Login
            </button>
            <Link href="/becomevendor" className="mobile-vendor-button">
              Become a Vendor
            </Link>
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