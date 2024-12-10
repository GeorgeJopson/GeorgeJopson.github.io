import '../../stylings/fonts.css';
import '../../stylings/colors.css';
import '../../stylings/buttons.css';
import './TechnicalSkills.css';
 

import Accordion from 'react-bootstrap/Accordion';

function TechnicalSkills(){
  return(
    <div className='containerBox' id="technicalSkillsSection">
      <div className="technicalSkillsBox">
        <h1 className="robotoMedium subTitleText">Technical Skills - Languages and Tools:</h1>
        <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header><span className="robotoBold">Python (Intermediate)</span></Accordion.Header>
          <Accordion.Body>
            I am intermediately skilled at Python having used it in projects such as shelf.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><span className="robotoBold">Web Dev (Beginner)</span></Accordion.Header>
          <Accordion.Body>
            I completed the 100 hour web dev course and custom built this website using react.
            I am familiar with many web development concepts although it hasn't been my primary focus.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><span className="robotoBold">Java (Beginner)</span></Accordion.Header>
          <Accordion.Body>
          I used Java in my uni degree to develop many different projects.
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
      </div>


      <div className="technicalSkillsBox">
      <h1 className="robotoMedium subTitleText">Technical Skills - Development Practices:</h1>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><span className="robotoBold">Test Driven Design</span></Accordion.Header>
        <Accordion.Body>
          I learnt about test driven design.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><span className="robotoBold">Clean Code</span></Accordion.Header>
        <Accordion.Body>
          I have read Clean Coder and Clean Code.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </div>
    
  );
};

export default TechnicalSkills;