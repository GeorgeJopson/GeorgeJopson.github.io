import '../App.css';
import '../fonts.css';

function Header(){
  return (
    <div className='header'>
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
          src={`${process.env.PUBLIC_URL}/profile.jpeg`} 
          alt='George Jopson standing in front of the Difference Engine'
          />
      </div>
  );
}

function HeaderTitleoBox(){
  return(
    <div className="titleBox">
        <h1 className="title robotoRegular">&gt;</h1>
        <div>
          <h1 className='title robotoRegular'>George Jopson</h1>
          <p className="subtitle robotoRegular"> Junior Software Developer</p>
          <DownloadCVButton />
        </div>
      </div>
  );
}

function DownloadCVButton(){
  return(
    <a className="downloadAnchor" href={`${process.env.PUBLIC_URL}/George-Jopson-CV.pdf`} target="_blank" rel="noreferrer">
      <button type="button" className="btn btn-outline-primary btn-large robotoMedium">Download CV</button>
    </a>
  );
}

export default Header;