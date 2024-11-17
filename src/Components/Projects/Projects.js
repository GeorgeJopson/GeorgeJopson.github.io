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
      <p className="robotoRegular paragraphText">This is a project I did do</p>
    </div>
  );
}

export default Projects;