import React from 'react';

const Navbar = () => {
  return(
    <div className="d-flex py-1 px-5 justify-content-between nav">
      <div className="logo">
        <p>logo</p>
      </div>
      <div className="nav-text">
        <p>Buy your eletronics</p>
      </div>
      <div className="nav-links">
        <small>Login</small>
        <small>|</small>
        <small>Register</small>
      </div>
    </div>
  );
}

export default Navbar
