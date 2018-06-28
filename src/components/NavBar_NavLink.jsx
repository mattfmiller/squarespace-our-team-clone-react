import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavLink(props) {
  return(
    <div className='navLink'>
      <style jsx>{`
          a {
            color: black;
            text-decoration: none;
            font-size: 13px;
          }
        `}
      </style>
      <Link to={props.linkUrl}><p>{props.name}</p></Link>
    </div>
  );
}

NavLink.propTypes = {
  name: PropTypes.string,
  linkUrl: PropTypes.string
};

export default NavLink;
