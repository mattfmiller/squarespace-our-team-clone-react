import React from 'react';
import BoardMember from './OurTeam_BoardList_BoardMember';

const boardMembers = [
  {
    name: 'ANTHONY CASALENA',
    title: 'Founder & CEO',
    association: 'Squarespace, Inc.',
  },
  {
    name: 'ANDREW BRACCIA',
    title: 'Partner',
    association: 'Accel Partners',
  },
  {
    name: 'JONATHAN KLEIN',
    title: 'Co-Founder & Chairman',
    association: 'Getty Images',
  },
  {
    name: 'DOMINIQUE VIDAL',
    title: 'Partner',
    association: 'Index Ventures',
  },
  {
    name: 'ANTON LEVY',
    title: 'Partner',
    association: 'General Atlantic',
  }
];

function BoardList() {
  return(
    <div>
      <div className='boardMembers'>
        <h2>BOARD OF DIRECTORS</h2>
        {boardMembers.map((member, index) =>
          <BoardMember name={member.name}
            title={member.title}
            association={member.association}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default BoardList;
