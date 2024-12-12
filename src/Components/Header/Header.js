import './Header.css';

import '../../stylings/text.css';
import '../../stylings/buttons.css';

import { useState, useEffect } from "react";

function Header(){
  return (
    <div className='header' id="header">
      <ProfilePic />
      <HeaderTitleoBox />
    </div>

  );
}

function ProfilePic(){
  return (
    <div className = "profilePicWrapper">
        <img
          className='profilePic' 
          src={'/profile.jpeg'} 
          alt='George Jopson standing in front of the Difference Engine'
          />
      </div>
  );
}

function HeaderTitleoBox(){
  let titleIndex = 1;
  const fullTitle = "George Jopson";
  const [shownTitle, setShownTitle] = useState(fullTitle.slice(0,titleIndex));
  const [hiddenTitle, setHiddenTitle] = useState(fullTitle.slice(titleIndex));

  useEffect(() => {
    const interval = setInterval(()=>{
      setShownTitle(fullTitle.slice(0,titleIndex));
      setHiddenTitle(fullTitle.slice(titleIndex));
      titleIndex++;
    }, 150);
    return () => {
      clearInterval(interval);
    };
  }, [titleIndex]);



  return(
    <div className="titleBox">
        <h1 className="headerTitle robotoRegular">&gt;</h1>
        <div>
          <h1 className='headerTitle robotoRegular'>{shownTitle}<span className="hiddenText">{hiddenTitle}</span></h1>
          <p className="subtitle robotoRegular smallParagraphText">Junior Software Developer - georgejopson@gmail.com</p>
          <p className="subtitle robotoRegular smallParagraphText">Github: <a href="https://github.com/GeorgeJopson" className="subtitle robotoRegular" target="_blank" rel="noreferrer">https://github.com/GeorgeJopson</a></p>
          <DownloadCVButton />
        </div>
      </div>
  );
}

function DownloadCVButton(){
  return(
    <a href={'/George-Jopson-CV.pdf'} target="_blank" rel="noreferrer">
      <button type="button" className="outlineBtn robotoMedium headerText btnTightPadding btnWide outlineBtnForPrimaryBackground">Download CV</button>
    </a>
  );
  
}

export default Header;