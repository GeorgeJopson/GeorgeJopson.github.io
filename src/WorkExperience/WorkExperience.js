import './WorkExperience.css';
import '../stylings/fonts.css';
import '../stylings/buttons.css';
import AchievementCarousel from '../AchievementCarousel/AchievementCarousel';

function WorkExperience(){
  return (
    <div className='containerBox' id="work-experience">
      <h1 className="robotoMedium headerText">Work Experience:</h1>

      <h2 className="robotoMedium subtitleText">Student Placment - Sanger Institute (2024-2025)</h2>
      <p className="robotoRegular workExperienceDescription paragraphText">
        Worked for a year as a Student Placement Software Developer at the Wellcome Sanger Institute. 
        The Wellcome Sanger Institute is a world class research centre in genomics, where 1000+ scientists, software developers, and support staff work
        on cutting edge science.
        <br/>
        I was part of a team that built a CLI tool for tracking large-scale genomics metadata using Python and MongoDB, with a microservices architecture.
      </p>
      <AchievementCarousel />
    </div>

  );
}
export default WorkExperience;