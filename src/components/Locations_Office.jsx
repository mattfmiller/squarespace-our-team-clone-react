import React from 'react';
import PropTypes from 'prop-types';

function Office(props) {
  return(
    <div className='office'>
      <style jsx>{`
          .office {
            display: flex;
            margin: 0 94px;
            padding: 140px 0;
          }
          img {
            width: 50vw;
          }
          p {
            margin: 2px;
          }
          .city-text {
            margin-right: 60px;
          }
          .city-text p:nth-of-type(1) {
            line-height: 1.8;
            font-size: 14px;
            margin-bottom: 20px;
          }
        `}
      </style>
      <div className='city-text'>
        <h3><strong>{props.city}</strong></h3>
        <p>{props.description}</p>
        <p>{props.address[0]}</p>
        <p>{props.address[1]}</p>
        <p>{props.address[2]}</p>
        <p>{props.address[3]}</p>
      </div>
      <div className='workspace-img'>
        <img src={props.image}/>
      </div>
    </div>
  );
}

Office.propTypes = {
  city: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.array,
  image: PropTypes.string
};

export default Office;
