import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavLink(props) {
  return(
    <div className='navLink'>
      <style jsx>{`
          span {
            color: black;
            text-decoration: none;
            font-size: 13px;
          }
        `}
      </style>
      <Link to={props.linkUrl}><p><span>{props.name}</span></p></Link>
    </div>
  );
}

NavLink.propTypes = {
  name: PropTypes.string,
  linkUrl: PropTypes.string
};

export default NavLink;
