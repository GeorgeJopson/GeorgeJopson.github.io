import './Bio.css';
import '../../stylings/fonts.css';

function Bio(){
  return(
    <div className="bioBox" id="bio">
      <h1 className="robotoMedium subTitleText">Bio:</h1>
      <ul>
        <li className="robotoRegular paragraphText"><b>Junior Developer</b> - skilled in <b>Python</b>, <b>Java</b>, and <b>Web Development</b>.</li>
        <li className="robotoRegular paragraphText"><b>Software Developer Intern</b> at Wellcome Sanger Institute – <b>1 year of hands-on experience.</b></li>
        <li className="robotoRegular paragraphText"><b>Computer Science Student</b> at the <b>University of York</b>.</li>
      </ul>
    </div>
  );
}

export default Bio;