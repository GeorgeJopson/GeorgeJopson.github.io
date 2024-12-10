import '../../stylings/fonts.css';
import '../../stylings/colors.css';
import '../../stylings/buttons.css';

import Accordion from 'react-bootstrap/Accordion';

function TechnicalSkills(){
  return(
    <div className='containerBox'>
      <h1 className="robotoMedium subTitleText">Technical Skills:</h1>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Python (Intermediate)</Accordion.Header>
        <Accordion.Body>
          I am intermediately skilled at Python having used it in projects such as shelf.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Web Dev (Beginner)</Accordion.Header>
        <Accordion.Body>
          I completed the 100 hour web dev course and custom built this website using react.
          I am familiar with many web development concepts although it hasn't been my primary focus.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Java (Beginner)</Accordion.Header>
        <Accordion.Body>
        I used Java in my uni degree to develop many different projects.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
};

export default TechnicalSkills;