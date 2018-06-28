import React from 'react';
import TeamList from './OurTeam_TeamList';
import BoardList from './OurTeam_BoardList';
import EmployeeGrid from './OurTeam_EmployeeGrid';
import space from '../assets/images/squarespace-space.jpg';

function OurTeam(){
  return(
    <div>
      <style jsx>{`
          img {
            width: 100%;
          }
        `}
      </style>
      <TeamList/>
      <BoardList/>
      <img src={space}/>
      <EmployeeGrid/>
    </div>
  );
}

export default OurTeam;
