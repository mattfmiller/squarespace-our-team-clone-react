import React from 'react';
import PropTypes from 'prop-types';

function TeamMember(props) {
  return(
    <div>
      <img src={props.image}/>
      <h4>{props.name}</h4>
      <p><strong>{props.title}</strong></p>
      <p>{props.bio}</p>
    </div>
  );
}

TeamMember.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string
};

export default TeamMember;
