import React from 'react';
import Link from './NavBar_Link';

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
    linkUrl: '/ourteam'
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
        }
      `}
      </style>
      <div className='links'>
        {linkList.map((link, index) =>
          <Link name={link.name}
            linkUrl={link.linkUrl}
            key={index}/>
        )}
      </div>
      <hr/>
    </div>
  );
}

export default NavBar;
