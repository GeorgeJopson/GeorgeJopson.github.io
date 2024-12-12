import './WorkExperience.css';

import learningData from "./learningData.json"
import AchievementCarousel from '../AchievementCarousel/AchievementCarousel';

function WorkExperience(){
  return (
    <div className='containerBox' id="work-experience">
      <h1 className="robotoMedium headerText">Work Experience:</h1>

      <h2 className="robotoMedium subtitleText">Student Placment - Sanger Institute (2024-2025)</h2>
      <p className="robotoRegular workExperienceDescription paragraphText">
      </p>
      <ul>
        <li className="robotoRegular paragraphText">Refactored microservices to use pytest instead of unittest. Also migrated a microservice from using flask to using fastapi as a web framework.</li>
        <li className="robotoRegular paragraphText">Lead adoption of MongoDB as a database. I initially spearheaded research into MongoDB and Pymongo (the python library used to interact with MongoDB). Then once we clarified that MongoDB was suitable, I wrote the template for implementation of MongoDB. This work was then replicated across all the microservices responsible for storing data.</li>
        <li className="robotoRegular paragraphText">I was part of a team that built a portfolio website for a scientific research group using react: <a href="https://helminthgenomics.sanger.ac.uk/" className="link">https://helminthgenomics.sanger.ac.uk/</a>.</li>
        <li className="robotoRegular paragraphText">Innovated on a microservice’s architecture to remove the need for a database in that microservice. I did this by applying a hashing algorithm (which automatically did the mapping that the microservice previously used a database for).</li>
        <li className="robotoRegular paragraphText">I occasionally performed “operations” tasks such as performing inductions to introduce scientists to Sanger’s HPC System. I also provided technical support to scientists.</li>
      </ul>
      <AchievementCarousel achievementData={learningData}/>
    </div>

  );
}
export default WorkExperience;