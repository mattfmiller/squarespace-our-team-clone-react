import React from 'react';
import PropTypes from 'prop-types';

function EmployeePic(props) {
  return(
    <div>
      <img src={props.pic}/>
    </div>
  );
}

EmployeePic.propTypes = {
  pic: PropTypes.string
};

export default EmployeePic;
