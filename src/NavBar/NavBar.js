import './NavBar.css';
import '../fonts.css';
import '../buttons.css';
import githubIcon from '../images/github.svg';

function Navbar(){
  return (
    <nav className="navbarExtraStyling navbar fixed-top navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand robotoRegular" href="#header">George Jopson</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link robotoRegular" href={"#bio"}>Bio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link robotoRegular" href={"#work-experience"}>Work Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link robotoRegular" href={"https://github.com/GeorgeJopson"} target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="Github Icon" className="githubIcon"/>
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>

  );
}
export default Navbar;