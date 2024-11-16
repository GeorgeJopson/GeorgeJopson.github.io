import './Bio.css';
import '../fonts.css';

function Bio(){
  return(
    <div className="bioBox" id="bio">
      <p className="robotoRegular bioText"><span className='robotoMedium bioTitle'>Bio:</span></p>
      <ul>
        <li className="robotoRegular bioBulletPoint"><span className='robotoMedium'>Junior Developer</span> - skilled in <span className="robotoMedium">Python</span>, <span className="robotoMedium">Java</span>, and <span className="robotoMedium">Web Development</span>.</li>
        <li className="robotoRegular bioBulletPoint"><span className="robotoMedium">Software Developer Intern</span> at Wellcome Sanger Institute – <span className='robotoMedium'>1 year of hands-on experience.</span></li>
        <li className="robotoRegular bioBulletPoint"><span className="robotoMedium">Computer Science Student</span> at the <span className="robotoMedium">University of York</span>.</li>
      </ul>
    </div>
  );
}

export default Bio;