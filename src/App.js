import './App.css';
import './fonts.css';

import Header from "./Header/Header.js";
import AchievementCarousel from './AchievementCarousel/AchievementCarousel.js';
import Bio from "./Bio/Bio.js";

function App() {
  return (
    <div className="App">
      <Header />
      <AchievementCarousel />
      <Bio />
    </div>
  );
}

export default App;
