import React from 'react';
import TeamMember from './OurTeam_TeamList_TeamMember';
import anthony from '../assets/images/anthony-casalena.jpg';
import nicole from '../assets/images/nicole-anasenes.jpg';
import andrew from '../assets/images/andrew-bartholomew.jpg';
import john from '../assets/images/john-colton.jpg';
import raphael from '../assets/images/raphael-fontes.jpg';
import david from '../assets/images/david-lee.jpg';
import kinjil from '../assets/images/kinjil-mathur.jpg';
import courtenay from '../assets/images/courtenay-oconnor.jpg';
import kris from '../assets/images/kris-passet.jpg';


const teamMembers = [
  {
    name: 'ANTHONY CASALENA',
    bio: 'Anthony Casalena is the Founder and CEO of Squarespace, which he started from his dorm room in 2003. During the company’s early years, Anthony acted as the sole engineer, designer, and support representative for the entire Squarespace platform. In addition to running the company and setting overall product strategy, he remains actively involved in many departments of the company that he had previously run himself. Anthony holds a Bachelor of Science in Computer Science from the University of Maryland.',
    title: 'FOUNDER & CHIEF EXECUTIVE OFFICER',
    image: anthony,
  },
  {
    name: 'NICOLE ANASENES',
    bio: 'Nicole brings to Squarespace 20 years of experience building new businesses and transforming legacy business models. Most recently, she served as Chief Financial Officer at Infor, one of the largest providers of enterprise applications in the world. Prior to Infor, Nicole spent 17 years in various operational and financial leadership positions within IBM’s Cloud Computing, Global Services, and Software organizations. She holds an MBA from The Wharton School of the University of Pennsylvania and a Bachelor’s degree from New York University.',
    title: 'CHIEF FINANCIAL OFFICER & CHIEF OPERATING OFFICER',
    image: nicole,
  },
  {
    name: 'ANDREW BARTHOLOMEW',
    bio: 'As the leader of Squarespace’s Strategy division, Andrew is responsible for developing the analytical frameworks that shape the company’s business. Since joining Squarespace, he has grown the division into a team that covers everything from business strategy and customer insights to analytics and data science. Prior to Squarespace, Andrew worked at the New York County District Attorney’s Office helping to shape the office’s new data-driven approach to fighting crime. Andrew graduated from Yale, where he majored in Psychology and was an editor at the Yale Daily News.',
    title: 'SENIOR VICE PRESIDENT, STRATEGY',
    image: andrew,
  },
  {
    name: 'JOHN COLTON',
    bio: 'John Colton, SVP of Engineering, oversees Squarespace’s vast engineering organization which drives the core programming for the company. Before joining Squarespace, John served in senior leadership roles at a number of organizations including database security vendor Application Security, business and service assurance vendor Micromuse, and videoconferencing vendor VisualScape. John began his engineering career at Cap Gemini America where he developed network management products for AT&T Network Systems. He received his B.S. in Computer Engineering from Lehigh University.',
    title: 'SENIOR VICE PRESIDENT, ENGINEERING',
    image: john,
  },
  {
    name: 'RAPHAEL FONTES',
    bio: 'Rapha leads Squarespace Ireland and oversees the company’s global Customer Operations teams that support millions of Squarespace users. Prior to this role, Raphael spent eight years at Google developing and managing different operations teams in Brazil, Argentina, Poland and Ireland. A Brazil native, he has 20+ years of experience in the tech world, working in a number of marketing and strategy positions in multinational companies such as FCBi, BellSouth, and Realmedia 24/7. Raphael is a mechanical engineer by trade with an MBA in Marketing.',
    title: 'VICE PRESIDENT, CUSTOMER OPERATIONS',
    image: raphael,
  },
  {
    name: 'DAVID LEE',
    bio: 'As the Chief Creative Officer of Squarespace, David Lee leads the company’s award-winning creative team, whose work encapsulates all brand creative, web design, and product design efforts for the company. In 2017, he was named one of the Most Creative People in Business by Fast Company. Since joining Squarespace, David has master minded five Super Bowl campaigns. Prior to Squarespace, David served as Worldwide Digital Executive Creative Director of TBWA Worldwide and as a Creative Director at Wieden+Kennedy and AKQA. He graduated from RISD with a BFA in graphic design.',
    title: 'CHIEF CREATIVE OFFICER',
    image: david,
  },
  {
    name: 'KINJIL MATHUR',
    bio: 'As the Chief Marketing Officer of Squarespace, Kinjil leads the company’s world-class marketing and PR teams. Before Squarespace, Kinjil served as CMO at Foursquare where she successfully repositioned the company’s brand to accelerate growth in both the consumer and enterprise location intelligence businesses. Kinjil spent the previous decade building technology competencies for retail giants, most notably as Vice President of Digital Marketing for Saks Fifth Avenue. She holds a bachelor’s degree with Honors from the University of Texas at Austin in Management of Information Systems and Finance.',
    title: 'CHIEF MARKETING OFFICER',
    image: kinjil,
  },
  {
    name: 'COURTENAY O\'CONNOR',
    bio: 'As General Counsel of Squarespace, Courtenay oversees the company’s global legal activities and policies across all aspects of the business. Prior to Squarespace, she served as Deputy General Counsel of Gizmodo Media Group, LLC where she led the legal department and provided counsel on a number of areas including editorial content, product, advertising, litigation, and corporate transactions. Earlier in her career, Courtenay was Counsel for The Hearst Corporation, a law clerk in the Eastern District of New York, and an associate at Simpson Thacher & Bartlett LLP. She holds a J.D. from The University of Michigan Law School and a B.A. from Wellesley College.',
    title: 'GENERAL COUNSEL',
    image: courtenay,
  },
  {
    name: 'KRIS PASSET',
    bio: 'As the Vice President of People, Kris Passet’s focus lies in the development and optimization of talent retention and acquisition initiatives. Since joining Squarespace, Kris has overseen the company’s meteoric growth while protecting and scaling its uniquely creative and entrepreneurial culture, and is responsible for leading all areas of Squarespace’s People operations. Prior to joining Squarespace, Kris worked at SecondMarket where she began her career in HR. She received her B.A. in Communication from Fordham University and although she has spent 15 years in New York City, she still calls Agana Springs, Guam, home.',
    title: 'VICE PRESIDENT, PEOPLE',
    image: kris,
  }
];

function TeamList(){
  return(
    <div className='container'>
      <style jsx>{`
        .links img {
          float: left;
        }
        h2 {
          text-align: center;
          text-transform: uppercase;
        }

      `}</style>
      <h2>Executive Team</h2>
      <div className='links'>
        {teamMembers.map((member, index) =>
          <TeamMember name={member.name}
            bio={member.bio}
            title={member.title}
            image={member.image}
            key={index}/>
        )}
      </div>
      <hr/>
    </div>
  );
}

export default TeamList;
