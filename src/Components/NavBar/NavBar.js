import './NavBar.css';

import '../../stylings/fonts.css';
import '../../stylings/buttons.css';
import githubIcon from '../../images/github.svg';

function Navbar(){
  const sectionDetails = [
    {
      "id":"bio",
      "name":"Bio"
    },
    {
      "id":"work-experience",
      "name":"Work Experience"
    },
    {
      "id":"projects",
      "name":"Projects"
    },
    {
      "id":"uni",
      "name":"Uni"
    }
  ]

  const navbarLinks = sectionDetails.map(
    (detail) => {
      return (
        <li className="nav-item" key={detail.id}>
          <a className="nav-link robotoRegular paragraphText" href={"#"+detail.id}>{detail.name}</a>
        </li>
      );
    }
  )

  return (
    <nav className="navbarExtraStyling navbar fixed-top navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand robotoRegular subtitleText" href="#header">George Jopson</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {navbarLinks}
          <li className="nav-item">
            <a className="nav-link robotoRegular paragraphText" href={"https://github.com/GeorgeJopson"} target="_blank" rel="noreferrer">
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