import React from 'react';
import EmployeePic from './OurTeam_EmployeeGrid_EmployeePic';
import dude from '../assets/images/crazy-dude.jpg';

const employeePics = [dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude];

function EmployeeGrid() {
  return(
    <div>
      <h2>OUR TEAM</h2>
      {employeePics.map((pic, index) =>
        <EmployeePic pic={pic}
          key={index}/>
      )}
    </div>
  );
}

export default EmployeeGrid;
