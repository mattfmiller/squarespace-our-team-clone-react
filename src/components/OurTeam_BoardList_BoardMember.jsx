import React from 'react';
import PropTypes from 'prop-types';

function BoardMember(props) {
  return(
    <div>
      <h5><strong>{props.name}</strong></h5>
      <p>{props.title}</p>
      <p>{props.association}</p>
    </div>
  );
}

BoardMember.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  association: PropTypes.string
};

export default BoardMember;
