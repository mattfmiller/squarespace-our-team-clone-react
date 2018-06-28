import React from 'react';
import TopBar from './Header_TopBar';
import Banner from '../assets/images/banner.jpg';


function Header() {
  return(
    <div>
      <style jsx>{`
          img {
            width: 100%;
          }
          .header-content {
            position: absolute;
            font-family: sans-serif;
            color: white;
          }
          .banner-text {
            margin-top: 15vw;
            margin-left: 50px;
          }
      `}</style>
      <div className='header-content'>
        <TopBar/>
        <div className='banner-text'>
          <p>OUR TEAM</p>
          <h3>POWERED BY THE PEOPLE</h3>
        </div>
      </div>
      <img src={Banner}/>
    </div>
  );
}

export default Header;
