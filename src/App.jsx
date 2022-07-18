import Spline from '@splinetool/react-spline';
import logo from "./assets/logo.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import line from "./assets/line.png";
import button from "./assets/button.png";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
          <div className="Content">
            <header>
              <img src={logo} alt="logo" className='logo'/>
              <h1>Daccord</h1>
            </header>
            <h2>Collaborate with people</h2>
            <p>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
            <img src={line} alt="line" className='line'/>
            <a className="button" href='./assets/CV_Guillaume_BARNILS.pdf' target="_blank" rel="noreferrer">
              <img src={button} alt="button" />
            </a>
            <span className='SocialLinks'>
              <a href='https://github.com/GBrnls' target="_blank" rel="noreferrer"> 
                <img src={github} alt="github" />
              </a>
              <a href='https://www.linkedin.com/in/guillaume-barnils/' target="_blank" rel="noreferrer"> 
                <img src={linkedin} alt="linkedin" />
              </a>
            </span>
          </div>
          <div className="Spline">
            <Spline scene="https://prod.spline.design/mNIHnZ64pXgFsVjk/scene.splinecode" />
          </div>
      </div>
    </div>
  );
}

export default App;
