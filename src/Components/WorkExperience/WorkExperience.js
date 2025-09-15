import './WorkExperience.css';

import '../../stylings/text.css';

import learningData from "./learningData.json"
import AchievementCarousel from '../AchievementCarousel/AchievementCarousel';

function WorkExperience(){
  return (
    <div className='containerBox' id="work-experience">
      <h1 className="robotoMedium headerText">Work Experience:</h1>

      <h2 className="robotoMedium subtitleText">Student Placment - Sanger Institute (2024-2025)</h2>
      <p className="robotoRegular workExperienceDescription paragraphText">
      During my year at the Wellcome Sanger Institute, I worked with my team on a scientific software system called <i>Shelf</i>, which allowed scientists to query data related to samples, genomic sequencing runs, and files that they generated. This project was built using Python with a microservice architecture, and MongoDB databases to store data. Through this project, I also became familiar with GitLab, Docker, and a variety of Python modules (like FastAPI, Pytest, PyMongo, etc).
      </p>
      <ul className='wordWrap'>
        <li className="robotoRegular paragraphText">Created key infrastructure packages to reduce duplication of CRUD interactions with MongoDB databases between microservices and to standardise error-handling.</li>
        <li className="robotoRegular paragraphText">Developed a core querying algorithm to link related scientific data, re-framing the problem as a graph-traversal pathfinding challenge.</li>
        <li className="robotoRegular paragraphText">Gave a 45-minute presentation on the use of test-driven development as part of the institute-wide Full-Stack BioDev talk series. Slides and research notes can be seen here: <a href="https://github.com/GeorgeJopson/Test-Driven-Development-Notes" className="robotoRegular wordWrap link">github.com/GeorgeJopson/Test-Driven-Development-Notes</a></li>
        <li className="robotoRegular paragraphText">Earned Professional Scrum Master I and Professional Scrum Product Owner I certifications. With this experience, I became my team’s Scrum Master, achieving outcomes such as:
          <ul>
            <li className="robotoRegular paragraphText">Focused Daily Scrums, reducing their length from up to an hour to the time-boxed 15 minutes.</li>
            <li className="robotoRegular paragraphText">Re-organised and renegotiated sprint scope when goals were at risk, which increased sprint success rates.</li>
            <li className="robotoRegular paragraphText">Used SQL to access system usage data, and then collaborated with an AI assistant to write analysis code (e.g., generating graphs). From this, I created value metrics which showed that only 2 out of the 5 commands were being used effectively. We combined these quantitative metrics with qualitative sprint feedback to re-focus on features that delivered value.</li>
          </ul>
        </li>
        <li className="robotoRegular paragraphText">Other highlights included:
          <ul>
            <li className="robotoRegular paragraphText">Refactored CLI tool to decouple business logic from its command-line library by using dependency inversion (from the SOLID principles).</li>
            <li className="robotoRegular paragraphText">Replaced singleton-based configuration management with dependency injection, making the system more testable and reliable.</li>
            <li className="robotoRegular paragraphText">Introduced MongoDB as the team’s persistent storage solution, producing learning tests that became a reference for colleagues and helped migrate legacy systems.</li>
            <li className="robotoRegular paragraphText">Developed websites such as <a href="https://helminthgenomics.sanger.ac.uk/" className="robotoRegular wordWrap link">helminthgenomics.sanger.ac.uk</a>  by working from legacy React code. I also interacted with stakeholders when I became the lead and managed stakeholder contact from another website project.</li>
            <li className="robotoRegular paragraphText">Mentored a work experience student (who left inspired to pursue software development) and ran technical inductions to introduce scientists to the high-performance computing systems in use.</li>
            <li className="robotoRegular paragraphText">Participated in a hackathon to develop an R client, learning R and the system’s API within three days to deliver a working prototype.</li>
            <li className="robotoRegular paragraphText">Gained inspiration from books including <i>Test-Driven Development by Example</i>, <i>Domain-Driven Design: Tackling Complexity in the Heart of Software</i>, <i>The Clean Coder</i> and <i>Clean Architecture</i>, <i>The Phoenix Project</i>, and <i>Crucial Conversations: Tools for Talking When Stakes Are High</i>.</li>
          </ul>
        </li>
      </ul>
      <AchievementCarousel achievementData={learningData}/>
    </div>

  );
}
export default WorkExperience;