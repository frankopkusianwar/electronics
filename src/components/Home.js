import React from 'react';

const Home = () => {
  return (
    <div className="row home mx-3 mt-3">
      <div className="col-3 home-aside mt-2">
        <ul>
          <li>Tv & Video</li>
          <li>Audio & Home theatre</li>
          <li>Computers</li>
          <li>Car electronics & GPS</li>
          <li>Phones</li>
          <li>Camera & Photo</li>
          <li>Office Electronics</li>
        </ul>
      </div>
      <div className="col-9 home-content">
        <div className="item bg-white m-2">
          <img src="" alt="item" />
          <div className="item-text">
            <p>New samsung galaxy note 9</p>
            <p>USh 1,350,000</p>
          </div>
        </div>
        <div className="item bg-white m-2">
          <img src="" alt="item" />
          <div className="item-text">
            <p>New samsung galaxy note 9</p>
            <p>USh 1,350,000</p>
          </div>
        </div>
        <div className="item bg-white m-2">
          <img src="" alt="item" />
          <div className="item-text">
            <p>New samsung galaxy note 9</p>
            <p>USh 1,350,000</p>
          </div>
        </div>
        <div className="item bg-white m-2">
          <img src="" alt="item" />
          <div className="item-text">
            <p>New samsung galaxy note 9</p>
            <p>USh 1,350,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
