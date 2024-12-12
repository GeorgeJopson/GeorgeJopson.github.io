import '../../stylings/text.css';
import '../../stylings/colors.css';
import '../../stylings/buttons.css';
import './TechnicalSkills.css';
 

import Accordion from 'react-bootstrap/Accordion';
import skillsData from "./technicalSkills.json"


function TechnicalSkills(){
  const skills = skillsData.skillAreas
  return(
    <div className='containerBox' id="technicalSkillsSection">
      {skills.map((skillArea, index)=>{
        return(
          <div className="technicalSkillsBox" key={index}>
            <AccordionInfoSection title={skillArea.title} entries={
              skillArea.entries
            }/>
          </div>
        );
      })}
    </div>
    
  );
};

export default TechnicalSkills;

function AccordionInfoSection({title, entries}){
  return(
    <div className="technicalSkillsBox">
      <h1 className="robotoMedium subTitleText">{title}</h1>
      <Accordion>
        {entries.map((entry,index) =>{
          return(
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header><span className="robotoBold">{entry.title}</span></Accordion.Header>
              <Accordion.Body>
                {entry.text}
              </Accordion.Body>
            </Accordion.Item>
        );
        })}
        
      </Accordion>
    </div>
  );
}