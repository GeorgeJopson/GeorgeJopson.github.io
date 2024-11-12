import './App.css';
import './fonts.css';

import Header from "./Header/Header.js";
import AchievementCarousel from './AchievementCarousel/AchievementCarousel.js';
import Bio from "./Bio/Bio.js";
import WorkExperience from './WorkExperience/WorkExperience.js';
import Navbar from './NavBar/NavBar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AchievementCarousel />
      <Bio />
      <WorkExperience />
    </div>
  );
}

export default App;
