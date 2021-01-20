import React from 'react';

const CategoryNav = () => {
  return(
    <div className="d-flex pt-3 px-5 justify-content-between category-nav">
      <div className="menu">MENU</div>
      <div className="logo">
        <p>logo</p>
      </div>
      <div class="form-group category-nav-search-form">    
        <input type="text" placeholder="Search.." name="search"/>
        <button type="submit">Go</button>
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

export default CategoryNav
