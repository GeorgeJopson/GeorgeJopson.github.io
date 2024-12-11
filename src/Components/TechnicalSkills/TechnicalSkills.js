import '../../stylings/fonts.css';
import '../../stylings/colors.css';
import '../../stylings/buttons.css';
import './TechnicalSkills.css';
 

import Accordion from 'react-bootstrap/Accordion';

function TechnicalSkills(){
  return(
    <div className='containerBox' id="technicalSkillsSection">
      <div className="technicalSkillsBox">
        <AccordionInfoSection title="Technical Skills - Languages and Tools:" sections={[
          {
            "title":"Python (Intermediate)",
            "text":"I am intermediately skilled at Python having used it in projects such as shelf."
          },
          {
            "title":"Web Dev (Beginner)",
            "text":"I completed the 100 hour web dev course and custom built this website using react. I am familiar with many web development concepts although it hasn't been my primary focus."
          },
          {
            "title":"Java (Beginner)",
            "text":"I used Java in my uni degree to develop many different projects."
          }
        ]}/>
      </div>

      <div className="technicalSkillsBox">
        <AccordionInfoSection 
          title="Technical Skills - Development Practices:"
          sections={[
            {
              "title":"Test Driven Design",
              "text":"I learnt about test driven design."
            },
            {
              "title":"Clean Code",
              "text":"I have read Clean Coder and Clean Code."
            }
          ]}
        />
      </div>
    </div>
    
  );
};

export default TechnicalSkills;

function AccordionInfoSection({title, sections}){
  return(
    <div className="technicalSkillsBox">
      <h1 className="robotoMedium subTitleText">{title}</h1>
      <Accordion>
        {sections.map((section,index) =>{
          return(
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header><span className="robotoBold">{section.title}</span></Accordion.Header>
              <Accordion.Body>
                {section.text}
              </Accordion.Body>
            </Accordion.Item>
        );
        })}
        
      </Accordion>
    </div>
  );
}