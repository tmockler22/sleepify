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
              <li><a href="https://www.samgutierrez.com" class="social-icon"><span
                class="label">Portfolio</span></a></li>
              <li><a href="https://www.linkedin.com/in/sammy-gutierrez/" class="social-icon"><span
                class="label">LinkedIn</span></a></li>
              <li><a href="https://angel.co/u/sammy-gutierrez/" class="social-icon"><span
                class="label">AngelList</span></a></li>
              <li><a href="mailto:sammygutierrez335@gmail.com" class="icon solid alt fa-envelope"><span
                class="label">Email</span></a></li>
            </ul>
            <ul>
              <h4>Kevin <br></br>Lu</h4>
                <li><a href="" class="social-icon"><span
                  class="label">Portfolio</span></a></li>
                <li><a href="https://www.linkedin.com/in/kevin-lu-96b294191/" class="social-icon"><span
                  class="label">LinkedIn</span></a></li>
                <li><a href="" class="social-icon"><span
                  class="label">AngelList</span></a></li>
                <li><a href="mailto:[emailgoeshere]" class="icon solid alt fa-envelope"><span
                  class="label">Email</span></a></li>
              </ul>
            <ul>
            <h4>Tristan<br></br>Mockler</h4>
            <li><a href="" class="social-icon"><span
              class="label">Portfolio</span></a></li>
            <li><a href="https://www.linkedin.com/in/tristan-mockler-bb2360173/" class="social-icon"><span
              class="label">LinkedIn</span></a></li>
            <li><a href="" class="social-icon"><span
              class="label">AngelList</span></a></li>
            <li><a href="mailto:[emailgoeshere]" class="icon solid alt fa-envelope"><span
              class="label">Email</span></a></li>
            </ul>
            <ul>
              <h4>Don <br></br>Sondapperumaarachchi</h4>
              <li><a href="" class="social-icon"><span
                class="label">Portfolio</span></a></li>
              <li><a href="https://www.linkedin.com/in/don-ayesh-sondapperumaarachchi-827894146/" class="social-icon"><span
                class="label">LinkedIn</span></a></li>
              <li><a href="" class="social-icon"><span
                class="label">AngelList</span></a></li>
              <li><a href="mailto:[emailgoeshere]" class="icon solid alt fa-envelope"><span
                class="label">Email</span></a></li>
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
