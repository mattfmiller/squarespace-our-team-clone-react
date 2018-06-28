import React from 'react';
import PropTypes from 'prop-types';

function TeamMember(props) {
  return(
    <div className='team-container'>
      <style jsx>{`
        .team-container {
          display: flex;
          justify-content: space-between;
        }
        .image {
          width: 70%;
        }
        img {
          width: 25vw;
          margin: 0px 0px 40px 60px;
        }
        .text {
          width: 100%;
        }
        .text p:last-child {
          line-height: 1.8;
        }

      `}</style>
      <div className='image'>
        <img src={props.image}/>
      </div>
      <div className='text'>
        <h4>{props.name}</h4>
        <p><strong>{props.title}</strong></p>
        <p>{props.bio}</p>
      </div>
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
