import './App.css';
import './stylings/fonts.css';
import './stylings/colors.css';

import Header from "./Components/Header/Header.js";
import Bio from "./Components/Bio/Bio.js";
import WorkExperience from './Components/WorkExperience/WorkExperience.js';
import Navbar from './Components/NavBar/NavBar.js';
import Projects from './Components/Projects/Projects.js';
import Uni from './Components/Uni/Uni.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Bio />
      <WorkExperience />
      <Projects />
      <Uni />
    </div>
  );
}

export default App;
