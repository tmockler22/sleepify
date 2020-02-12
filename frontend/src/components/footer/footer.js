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
              <h4>COMPANY</h4>
              <li>About</li>
              <li>Jobs</li>
              <li>For the Record</li>
            </ul>
            <ul>
              <h4>COMMUNITIES</h4>
              <li>For Artist</li>
              <li>Developers</li>
              <li>Brands</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>
            <ul>
              <h4>USEFUL LINKS</h4>
              <li>Help</li>
              <li>Web Player</li>
              <li>Free Mobile App</li>
            </ul>
          </div>
          <div id="social-network-icons">
            <ul>
              <li>
                <a href="https://www.instagram.com/">
                  <img
                    className="social-icon"
                    src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/instagram-512.png"
                  ></img>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <img
                    className="social-icon"
                    src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/twitter-512.png"
                  ></img>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img
                    className="social-icon"
                    src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/facebook-512.png"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
          <div id="country">
            <p>USA</p>
            <img src="https://icons.iconarchive.com/icons/wikipedia/flags/1024/US-United-States-Flag-icon.png"></img>
          </div>
          <div id="bottom-links">
            <ul>
              <li>Legal</li>
              <li>Privacy Center</li>
              <li> Privacy Policy</li>
              <li>Cookies</li>
              <li>About Ads</li>
              <li>Additional CA Privacy Disclosure</li>
            </ul>
            <span>2020 Sleepify</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
