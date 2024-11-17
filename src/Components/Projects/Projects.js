import './Projects.css';
import '../../stylings/fonts.css';
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

function ProjectBox({name, imageInfo, portfolioText, repoInfo}){
  return(
    <div className="projectBox">
      <h2 className="robotoRegular subtitleText">{name}:</h2>
      <div className="projectInfoBox">
        <img src={imageInfo["src"]} alt={imageInfo["alt"]} className='projectInfoImage'/>
        <div className="projectInfoText">
          <p className="robotoRegular paragraphText">{portfolioText}</p>
          <a href={repoInfo["repoLink"]} target="_blank" rel="noreferrer">
            <button className="btn btn-outline-primary robotoRegular subtitleText outlineBtnForRegularBackground">{repoInfo["name"]}</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;