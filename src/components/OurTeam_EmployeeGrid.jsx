import React from 'react';
import EmployeePic from './OurTeam_EmployeeGrid_EmployeePic';
import dude from '../assets/images/crazy-dude.jpg';

const employeePics = [dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude, dude];

function EmployeeGrid() {
  return(
    <div>
      <style jsx>{`
        .flex-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        h2 {
          text-align: center;
        }

      `}</style>
      <h2>OUR TEAM</h2>
      <div className='flex-grid'>
        {employeePics.map((pic, index) =>
          <EmployeePic pic={pic}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default EmployeeGrid;
