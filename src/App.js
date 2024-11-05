import './App.css';
import './fonts.css'

function Header(){
  return (
    <div className='header'>
      <div className = "profilePicWrapper">
        <img
          className='profilePic' 
          src={`${process.env.PUBLIC_URL}/profile.jpeg`} 
          alt='George Jopson standing in front of the Difference Engine'
          />
      </div>
      <h1 className='title robotoRegular'>George Jopson</h1>
    </div>

  );
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
