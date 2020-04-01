import React from "react";
import logo from "../../assets/images/white-logo-black-music.png";
class Header extends React.Component {
  render() {
    return (
      <div id="footer-container">
        <nav id="footer-nav">
          <div>
            <img id="white-logo" src={logo} alt="logo" />
          </div>
          <div id="footer-nav-links">
            <ul>
              <h4>Sam <br></br>Gutierrez</h4>
              <i class="fab fa-linkedin-in"></i>
              <li><a href="https://www.samgutierrez.com" className="social-icon"><span
                className="label">fa</span></a>Portfolio</li>
              <li><a href="https://www.linkedin.com/in/sammy-gutierrez/" className="social-icon"><span
                className="label">fa</span></a>LinkedIn</li>
              <li><a href="https://angel.co/u/sammy-gutierrez/" className="social-icon"><span
                className="label">fa</span></a>AngelList</li>
              <li><a href="mailto:sammygutierrez335@gmail.com" className="social-icon"><span
                className="label">fa</span></a>Email</li>
            </ul>
            <ul>
              <h4>Kevin <br></br>Lu</h4>
                <li><a href="" className="social-icon"><span
                className="label">fa</span></a>Portfolio</li>
                <li><a href="https://www.linkedin.com/in/kevin-lu-96b294191/" className="social-icon"><span
                className="label">fa</span></a>LinkedIn</li>
                <li><a href="" className="social-icon"><span
                className="label">fa</span></a>AngelList</li>
              <li><a href="mailto:[emailgoeshere]" className="social-icon"><span
                className="label">fa</span></a>Email</li>
              </ul>
            <ul>
            <h4>Tristan<br></br>Mockler</h4>
            <li><a href="" className="social-icon"><span
                className="label">fa</span></a>Portfolio</li>
            <li><a href="https://www.linkedin.com/in/tristan-mockler-bb2360173/" className="social-icon"><span
                className="label">fa</span></a>LinkedIn</li>
            <li><a href="" className="social-icon"><span
                className="label">fa</span></a>AngelList</li>
              <li><a href="mailto:[emailgoeshere]" className="social-icon"><span
                className="label">fa</span></a>Email</li>
            </ul>
            <ul>
              <h4>Don <br></br>Sondapperumaarachchi</h4>
              <li><a href="" className="social-icon"><span
                className="label">fa</span></a>Portfolio</li>
              <li><a href="https://www.linkedin.com/in/don-ayesh-sondapperumaarachchi-827894146/" className="social-icon"><span
                className="label">fa</span></a>LinkedIn</li>
              <li><a href="" className="social-icon"><span
                className="label">fa</span></a>AngelList</li>
              <li><a href="mailto:[emailgoeshere]" className="social-icon"><span
                className="label">fa</span></a>Email</li>
            </ul>
          </div>
          <div id="bottom-links">
            <span></span>
            <span>2020 Sleepify</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
