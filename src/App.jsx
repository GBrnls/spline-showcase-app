import Spline from '@splinetool/react-spline';
import logo from "./assets/logo.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import button from "./assets/button.png";

function App() {
  return (
    <div className="App">

          <div className="Content">
            <header>
              <img src={logo} alt="logo" className='logo'/>
              <h1>Daccord</h1>
            </header>
            <h2>Collaborate with people</h2>
            <p>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
          </div>

          <div className='Spline'>
            <Spline className="Render" scene="https://prod.spline.design/mNIHnZ64pXgFsVjk/scene.splinecode" />
          </div>

          <div className='SocialLinks'>
            <div className="line" />
            <a href='https://github.com/GBrnls' target="_blank" rel="noreferrer"> 
              <img src={github} alt="github" />
            </a>
            <a href='https://www.linkedin.com/in/guillaume-barnils/' target="_blank" rel="noreferrer"> 
              <img src={linkedin} alt="linkedin" />
            </a>
            <a className="button" href='./assets/CV_Guillaume_BARNILS.pdf' target="_blank" rel="noreferrer">
              <img src={button} alt="button" />
            </a>
          </div>
          
    </div>
  );
}

export default App;
