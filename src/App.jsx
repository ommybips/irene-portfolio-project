import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <h1 id="title">Irene P.</h1>
        <p>About</p>
        <a href="#experience">
          <p>Experience</p>
        </a>
        <button>Contact</button>
      </nav>

      <div className="main">
        <img src="/Vector.png" alt="display" id="profile-pic" />
        <div className="intro">
          <h1>Hi! This is Me.</h1>
          <h2>Irene Phamorn</h2>
          <p>
            I'm a passionate and ambitious web developer. I am always
            proactively learning new ways to build my skill set and add tools
            that will compliment those skills. I have work experiences as
            Jr.fronted developer.
          </p>
        </div>
      </div>
      <div id="experience">
        <h1 id="experience-heading">Experience</h1>
        <img
          src="/experience.png"
          alt="experience-timeline"
          id="experience-timeline"
        />
      </div>
      <div className="footer">
        <a href="https://www.facebook.com/ommybips" target="_blank">
          <img src="/facebook.png" alt="facebook-icon" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/ommybips/" target="_blank">
          <img src="/linkedin.png" alt="linkedin-icon" className="icon" />
        </a>
        <a href="https://www.instagram.com/ommybips/" target="_blank">
          <img src="/instagram.png" alt="instagram-icon" className="icon" />
        </a>
        <a href="https://github.com/ommybips" target="_blank">
          <img src="/github.png" alt="github-icon" className="icon" />
        </a>
      </div>
    </>
  );
}

export default App;
