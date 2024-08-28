import React from 'react';
import './styles/Header.css';

const Header = () => (
  <header className="head">
    <a href='../App.js' id='logo'>Stripe</a>
    <nav>
        <div class='dropdown'>
            <a href="#products" class="dropbtn">Products</a>
            <div class="dropdown-content">
                <p>Explore our range of payment solutions, from online payment gateways to point-of-sale systems.</p>
            </div>
        </div>

        <div class='dropdown'>
            <a href="#solutions" class="dropbtn">Solutions</a>
            <div class="dropdown-content">
                <p>Discover tailored payment solutions for businesses of all sizes, designed to streamline your transactions.</p>
            </div>
        </div>

        <div class='dropdown'>
            <a href="#developers" class="dropbtn">Developers</a>
            <div class="dropdown-content">
                <p>Access our developer portal for APIs, SDKs, and comprehensive documentation to integrate payment processing into your applications.</p>
            </div>
        </div>

        <div class='dropdown'>
            <a href="#resources" class="dropbtn">Resources</a>
            <div class="dropdown-content">
                <p>Find guides, tutorials, and support to help you get the most out of our payment solutions.</p>
            </div>
        </div>

        <a href="#pricing" class="dropbtn">Pricing</a>
    </nav>
    <div className='nav_buttons'>
        <a href="#contact" className='hover-button'>Contact Sales</a>
        <button id='urBtn'><a href="#signup" className='signup_head hover-button'>Sign up</a></button>    
    </div>

  </header>
);

export default Header;
