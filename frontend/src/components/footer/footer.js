import React from "react";
import logo from "../../assets/images/white-logo-blue-music.png";
class Header extends React.Component {
  render() {
    return (
      <div id="footer-container">
        <nav id="footer-nav">
          <div>
            <img className="white-logo" src={logo} alt="logo" />
          </div>
          <div id="footer-nav-links">
            <ul>
              <h4>Sam <br></br>Gutierrez</h4>
              <li><a href="https://www.samgutierrez.com" ><i className="social-icon fas fa-portrait"></i></a>Portfolio</li>
              <li><a href="https://github.com/SammyGutierrez335" ><i className="social-icon fab fa-github"></i></a>GitHub</li>
              <li><a href="https://www.linkedin.com/in/sammy-gutierrez/" ><i className="social-icon fab fa-linkedin"></i></a>LinkedIn</li>
              <li><a href="https://angel.co/u/sammy-gutierrez/" ><i className="social-icon fab fa-angellist"></i></a>AngelList</li>
              <li><a href="mailto:sammygutierrez335@gmail.com" ><i className="social-icon fas fa-envelope-square"></i></a>Email</li>
            </ul>
            <ul>
              <h4>Kevin <br></br>Lu</h4>
              <li><a href="" ><i className="social-icon fas fa-portrait"></i></a>Portfolio</li>
            <li><a href="" ><i className="social-icon fab fa-github"></i></a>GitHub</li>
              <li><a href="https://www.linkedin.com/in/kevin-lu-96b294191/" ><i className="social-icon fab fa-linkedin"></i></a>LinkedIn</li>
              <li><a href="" ><i className="social-icon fab fa-angellist"></i></a>AngelList</li>
              <li><a href="mailto:[emailgoeshere]" ><i className="social-icon fas fa-envelope-square"></i></a>Email</li>
              </ul>
            <ul>
            <h4>Tristan<br></br>Mockler</h4>
              <li><a href="" ><i className="social-icon fas fa-portrait"></i></a>Portfolio</li>
              <li><a href="" ><i className="social-icon fab fa-github"></i></a>GitHub</li>
              <li><a href="https://www.linkedin.com/in/tristan-mockler-bb2360173/" ><i className="social-icon fab fa-linkedin"></i></a>LinkedIn</li>
              <li><a href="" ><i className="social-icon fab fa-angellist"></i></a>AngelList</li>
              <li><a href="mailto:[emailgoeshere]" ><i className="social-icon fas fa-envelope-square"></i></a>Email</li>
            </ul>
            <ul>
              <h4>Don <br></br>Sondapperumaarachchi</h4>
              <li><a href=""><i className="social-icon fas fa-portrait"></i></a>Portfolio</li>
              <li><a href="" ><i className="social-icon fab fa-github"></i></a>GitHub</li>
              <li><a href="https://www.linkedin.com/in/don-ayesh-sondapperumaarachchi-827894146/" ><i className="social-icon fab fa-linkedin"></i></a>LinkedIn</li>
              <li><a href="" ><i className="social-icon fab fa-angellist"></i></a>AngelList</li>
              <li><a href="mailto:[emailgoeshere]" ><i className="social-icon fas fa-envelope-square"></i></a>Email</li>
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
