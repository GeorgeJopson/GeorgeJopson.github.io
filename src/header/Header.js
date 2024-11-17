import './Header.css';
import '../stylings/fonts.css';
import '../stylings/buttons.css';

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
  return(
    <div className="titleBox">
        <h1 className="headerTitle robotoRegular">&gt;</h1>
        <div>
          <h1 className='headerTitle robotoRegular'>George Jopson</h1>
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
      <button type="button" className="btn btn-outline-primary btn-large robotoMedium headerText btnRegular outlineBtnPrimary">Download CV</button>
    </a>
  );
}

export default Header;