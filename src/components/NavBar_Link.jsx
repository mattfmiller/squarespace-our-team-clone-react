import React from 'react';
import PropTypes from 'prop-types';

function Link(props) {
  return(
    <div>
      <p>{props.name}</p>
    </div>
  );
}

Link.propTypes = {
  name: PropTypes.string
};

export default Link;
