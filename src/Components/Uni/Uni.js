import './Uni.css';
import '../../stylings/fonts.css';
import '../../stylings/colors.css';

import modulesData from "./modules.json";

import { Tooltip, OverlayTrigger } from 'react-bootstrap';


function Uni(){
  const modules = modulesData.modules
  const sortedModules = modules.sort(
    (a, b) => b.score*b.year*b.importance - a.score*a.year*a.importance
  )

  const moduleBoxes = sortedModules.map((module)=>{
    const e = 2.71828;
    const offset = 80;
    const stretch = 8;

    let colorPercentage = 100/(1+e**(-((module.score-offset)/stretch)));
    colorPercentage = colorPercentage-10;
    colorPercentage = Math.min(colorPercentage, 100);
    colorPercentage = Math.max(colorPercentage, 10);
    const tooltip = (
      <Tooltip id="tooltip">
        <b className="robotoRegular">{module.name}</b>
      </Tooltip>
    );
    return(
      <OverlayTrigger placement="top" overlay={tooltip}>
            <div className="module" key={module.code} style={
        {backgroundColor: `color-mix(in hsl, var(--highlight-light), var(--highlight-intense) ${colorPercentage}%)`}
      }>
        <p className="robotoMedium subtitleText moduleName">{module.code}: Year {module.year}</p>
        <p className="robotoMedium subtitleText moduleScore">{module.score}%</p>
      </div> 
      </OverlayTrigger>

    );
  });
  
  return(
    <div className="uniContainerBox" id="uni">
      <h1 className="robotoMedium subTitleText">University of York (2022-2026)</h1>
      <div className="modulesBox">
        {moduleBoxes}
      </div>
    </div>
  );
}

export default Uni;