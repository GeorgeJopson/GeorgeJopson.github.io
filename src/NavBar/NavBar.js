import './NavBar.css';
import '../fonts.css';
import '../buttons.css';

function Navbar(){
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#header">George Jopson</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href={"#work-experience"}>Work Experience</a>
          </li>
        </ul>
      </div>
    </nav>

  );
}
export default Navbar;