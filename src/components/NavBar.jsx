import React from 'react';
import NavLink from './NavBar_NavLink';

const linkList = [
  {
    name: 'About Us',
    linkUrl: '/about'
  },
  {
    name: 'Careers',
    linkUrl: '/careers'
  },
  {
    name: 'Our Team',
    linkUrl: '/'
  },
  {
    name: 'Locations',
    linkUrl: '/locations'
  }
];

function NavBar() {
  return(
    <div className='navBar'>
      <style jsx>{`
        .links {
          display: flex;
          justify-content: space-around
        }
        .navBar {
          margin: 15px 40px;
          text-transform: uppercase;
        }
      `}
      </style>
      <div className='links'>
        {linkList.map((link, index) =>
          <NavLink name={link.name}
            linkUrl={link.linkUrl}
            key={index}/>
        )}
      </div>
      <hr/>
    </div>
  );
}

export default NavBar;
