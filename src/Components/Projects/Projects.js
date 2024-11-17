import './Projects.css';
import '../../stylings/fonts.css';
import '../../stylings/colors.css';

function Projects(){
  return(
    <div className="projectsSection" id="projects">
      <h1 className="robotoMedium subTitleText">Personal Projects:</h1>
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
    </div>
  );
}

function ProjectBox(){
  return(
    <div className="projectBox">
      <h2 className="robotoRegular subtitleText">Portfolio Website:</h2>
      <div className="projectInfoBox">
        <img src='/portfolioWebsite.JPG' alt='Portfolio website' className='projectInfoImage'/>
        <div className="projectInfoText">
          <p className="robotoRegular paragraphText">This is a project I did do</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;