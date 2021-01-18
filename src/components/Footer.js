import React from 'react';

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-between p-4 mt-3">
      <div className="about">
        <p>About Us</p>
        <li>About company</li>
        <li>We are hiring</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Billing Policy</li>
      </div>
      <div className="support">
        <p>Support</p>
        <li>Safety Tips</li>
        <li>Contact Us</li>
        <li>FAQ</li>
      </div>
      <div className="resources">
        <p>Our resources</p>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Youtube</li>
        <li>Twitter</li>
      </div>
      <div className="hotlinks">
        <p>Hot Links</p>
        <li>Brand</li>
        <li>Company Sellers</li>
        <li>Regions</li>
      </div>
    </div>
  );
}

export default Footer;
