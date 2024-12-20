import './App.css';
import './stylings/text.css';
import './stylings/colors.css';

import Header from "./Components/Header/Header.js";
import Bio from "./Components/Bio/Bio.js";
import WorkExperience from './Components/WorkExperience/WorkExperience.js';
import Navbar from './Components/NavBar/NavBar.js';
import Projects from './Components/Projects/Projects.js';
import Uni from './Components/Uni/Uni.js';
import TechnicalSkills from './Components/TechnicalSkills/TechnicalSkills.js';
import Contact from './Components/Contact/Contact.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Bio />
      <WorkExperience />
      <Projects />
      <Uni />
      <TechnicalSkills />
      <Contact />
    </div>
  );
}

export default App;
