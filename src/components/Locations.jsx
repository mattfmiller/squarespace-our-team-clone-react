import React from 'react';
import Office from './Locations_Office';
import newYork from '../assets/images/new-york.jpg';
import portland from '../assets/images/portland.jpg';
import dublin from '../assets/images/dublin.jpg';

const officeList=[
  {
    city: 'NEW YORK',
    description: 'Squarespace’s 98,000-square-foot headquarters are located in Manhattan’s West Village at 8 Clarkson Street. The office fills three floors, in addition to a dedicated lobby and roof deck, within the historic Maltz Building. The space was designed with a focus on creating collaborative working spaces for employees to solve problems together creatively.',
    address: ['Squarespace, Inc.', '225 Varick Street, 12th Floor', 'New York, NY 10014',''],
    image: newYork
  },
  {
    city: 'PORTLAND',
    description: 'Squarespace Portland opened in 2014 and is located in the Spalding Building on SW Washington Street in the downtown area of the city. Just around the corner are gourmet food trucks, green spaces, and an array of cultural offerings. The 25,000-square-foot office houses one hub of our Customer Operations team.',
    address: ['Squarespace Portland', '311 SW Washington St.', 'Portland, OR 97204',''],
    image: portland
  },
  {
    city: 'DUBLIN',
    description: 'The Squarespace Dublin office was founded in 2013 as a hub for our Customer Operations team. The 24,589-square-foot office space is located at Le Pole House in Dublin 8, close to Antique Quarter, The Liberties, and original city walls. Squarespace occupies four floors with a dedicated entrance, lobby, and roof terrace.',    address: ['Squarespace Ireland Ltd.', 'Le Pole House, 1st Floor', 'Ship Street Great', 'Dublin 8'],
    image: dublin
  }
];

function Locations(){
  return(
    <div>
      <style jsx>{`
        h3 {
          text-align: center;
          font-weight: 100;
          font-size: 26px;
        }

      `}</style>
      <h3>As a company with global reach, Squarespace is proud to be<br/> headquartered in bustling New York City, with offices in<br/> Portland, Oregon and Dublin, Ireland.</h3>
      <hr/>
      {officeList.map((office, index) =>
        <Office city={office.city}
          description={office.description}
          address={office.address}
          image={office.image}
          key={index}/>
      )}
    </div>
  );
}

export default Locations;
