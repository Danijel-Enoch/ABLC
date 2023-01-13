import React from 'react';
import "./Footer.css";

import { Link } from 'react-router-dom';

import p2ph1 from "./assets/p2p-h-1.png";
import p2ph2 from "./assets/p2p-h-2.png";
import p2ph3 from "./assets/p2p-h-3.png";
import p2ph4 from "./assets/p2p-h-4.png";
import p2ph5 from "./assets/p2p-h-5.png";
import p2ph6 from "./assets/p2p-h-6.png";



function Footer(){
    return(
        <>
        <div class="footer-main">
        <div class="footer">
    <div class="footer-div1">
    <div class="footer-div1a">
        <p><Link to="/fees" style={{textDecoration: 'none', color:'white'}}>Fees</Link></p>
        <p><Link to="/termsOfServices" style={{textDecoration: 'none', color:'white'}}>Terms of Services</Link></p>
        <p>Contact Us</p>
        {/* <p>Create an Offer</p> */}
    </div>
    <div class="footer-div1b">
            <p>Any inquires for ABLC - Contact <span class='p2p-h-div1b-active'>p2pablc@ablc.io</span></p>
    </div>
    </div>
    <div class="footer-div2">
            <img src={p2ph1}></img>
            <img src={p2ph2}></img>
            <img src={p2ph3}></img>
            <img src={p2ph4}></img>
            <img src={p2ph5}></img>
            <img src={p2ph6}></img>
    </div>
</div>
</div>
        </>
    )

}
export default Footer;