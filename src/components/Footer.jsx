import React from 'react';
import Midias from '../images/midias.jpg'
import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <div class="wrapper-media">
                <div class="page-links">
                    <a href="/">Company </a>
                    <a href="/">Contact us </a>
                    <a href="/">Shipping </a>
                    <a href="/">Returns </a>
                    <a href="/">Carrers </a>
                </div>
                <img src={Midias} alt="midias"/>
                <p>&copy; 2015 Merlin's Potions. All Rights Reserved</p>
            </div>
            <div class="wrapper-newsletter">
                <div class="newsletter">
                    <p>Sign up for our newsletter</p>
                    <p>Sign up for our newsletter &amp; get exclusive discounts! </p>
                    <form id="">
                        <input type="email" placeholder="Enter your email"></input>
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;
