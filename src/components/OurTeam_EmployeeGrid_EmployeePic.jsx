import React from 'react';
import PropTypes from 'prop-types';

function EmployeePic(props) {
  return(
    <div>
      <style jsx>{`
        img {
          width: 100px;
        }


      `}</style>
      <img src={props.pic}/>
    </div>
  );
}

EmployeePic.propTypes = {
  pic: PropTypes.string
};

export default EmployeePic;
