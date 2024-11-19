import './Uni.css';
import '../../stylings/fonts.css';
import '../../stylings/colors.css';

import modulesData from "./modules.json";

function Uni(){
  const moduleBoxes = modulesData.modules.map((module)=>{
    const e = 2.71828;
    const offset = 80;
    const stretch = 8;

    let colorPercentage = 100/(1+e**(-((module.score-offset)/stretch)));
    colorPercentage = Math.min(colorPercentage, 100);
    colorPercentage = Math.max(colorPercentage, 0);

    return(
      <div className="module" key={module.code} style={
        {backgroundColor: `color-mix(in hsl, var(--highlight-light), var(--highlight-intense) ${colorPercentage}%)`}
      }>
        <p className="robotoMedium subtitleText moduleName">{module.code}</p>
        <p className="robotoMedium subtitleText moduleScore">{module.score}</p>
      </div> 
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