import React from 'react';
import Logo from '../assets/images/logo.png';

function TopBar() {
  return(
    <div className='container'>
      <style jsx>{`
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: sans-serif;
            font-size: 13px;
            text-transform: uppercase;
            width: 100%;
            height: 60px;
          }
          img {
            width: 25%;
          }
          .logo {
            width: 60%;
            margin-left: 20px;
          }
          .links {
            display: flex;
            justify-content: space-around;
            width: 100%;
          }
          hr {
            margin: 10px;
          }
          .links-left {
            display: flex;
            justify-content: space-between;
            width: 60%;
          }
          .links-right {
            display: flex;
            justify-content: space-between;
            width: 40%;
          }
          .button {
            color: black;
            background-color: white;
            padding: 10px 20px;
            align-self: center;
            margin: 0;
          }
      `}</style>
      <div className='logo'>
        <img src={Logo}/>
      </div>
      <div className='links'>
        <div className='links-left'>
          <p>Tour</p>
          <p>Our customers</p>
          <p>Support</p>
        </div>
        <hr/>
        <div className='links-right'>
          <p>Log In</p>
          <p className="button">Create a Site</p>
        </div>
      </div>
    </div>

  );
}

export default TopBar;
