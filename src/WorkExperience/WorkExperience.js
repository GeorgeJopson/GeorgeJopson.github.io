import './WorkExperience.css';
import '../fonts.css';
import '../buttons.css';
import AchievementCarousel from '../AchievementCarousel/AchievementCarousel';

function WorkExperience(){
  return (
    <div className='containerBox' id="work-experience">
      <h1 className="robotoMedium">Work Experience:</h1>
      <p className="robotoRegular">This is some text about work experience</p>
      <AchievementCarousel />
    </div>

  );
}
export default WorkExperience;