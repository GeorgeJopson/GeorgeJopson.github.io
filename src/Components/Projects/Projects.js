import './Projects.css';
import '../../stylings/text.css';
import '../../stylings/colors.css';
import '../../stylings/buttons.css';

import projectsData from "./projects.json"

function Projects(){
  const projectInfoBoxes = projectsData.projects.map(
    (projectData)=>{
      return(
        <ProjectBox 
        name={projectData.name}
        imageInfo={{
          "src":projectData.imageInfo.src,
          "alt":projectData.imageInfo.alt
        }}
        portfolioText={projectData.portfolioText}
        repoInfo={{
          "name":projectData.repoInfo.name,
          "repoLink":projectData.repoInfo.repoLink
        }}
        skills={projectData.skills}
        key={projectData.name}
        />
      );
    }
  )

  return(
    <div className="projectsSection" id="projects">
      <h1 className="robotoMedium subTitleText">Personal Projects:</h1>
      {projectInfoBoxes}
    </div>
  );
}

function ProjectBox({name, imageInfo, portfolioText, repoInfo, skills}){
  const skillsBoxes = skills.map((skill)=>
    <div className="skillBox robotoRegular paragraphText" key={skill}>
      {skill}
    </div>
  );
  return(
    <div className="projectBox">
      <h2 className="robotoRegular subtitleText">{name}:</h2>
      <div className="projectInfoBox">
        <img src={imageInfo["src"]} alt={imageInfo["alt"]} className='projectInfoImage'/>
        <div className="projectInfoText">
          <p className="robotoRegular paragraphText projectDescription">{portfolioText}</p>
          <div className="skillsGroup">
            {skillsBoxes}
          </div>
          <a href={repoInfo["repoLink"]} target="_blank" rel="noreferrer">
            <button className="outlineBtn robotoRegular subtitleText outlineBtnForRegularBackground">{repoInfo["name"]}</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;