import './App.css';
import './fonts.css';

import Header from "./Header/Header.js";
import AchievementCarousel from './AchievementCarousel/AchievementCarousel.js';
import Bio from "./Bio/Bio.js";
import Modals from "./Modals/Modals.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Modals modalOpen={-1} modalsInfo={[1,2,3,4]}/>
      <AchievementCarousel />
      <Bio />
    </div>
  );
}

export default App;
