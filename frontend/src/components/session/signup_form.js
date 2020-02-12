import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      email2: '',
      username: '',
      password: '',
      password2: '',
      birthdate: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeBorderOnBlur = this.changeBorderOnBlur.bind(this);
    this.changeBorder = this.changeBorder.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/home');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email2: this.state.email2,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
      birthdate: this.state.birthdate,
    };

    this.props.signup(user, this.props.history); 
  }

  changeBorder(value = "all") {
    // const e = this.state.errors
    if (value === "all") {
      let elements = document.querySelectorAll('.signup-border');
      if (elements) {
        Array.from(elements).forEach(elm => {
          if(!elm.value) {
            elm.classList.add('has-error')
          }
        });
      }
    } else {
      let element = document.getElementById(value);
      const errorId = value + "-error"
      let error = document.getElementById(errorId)
      if(element && error) {
        element.classList.remove("has-error")
        // error.classList.add("hidden")
      }
    }
  }

  changeBorderOnBlur(value) {
    let element = document.getElementById(value);
    if(element && !this.state[value]) {
      const errorId = value + "-error"
      let error = document.getElementById(errorId)
      error.classList.remove("hidden")
      element.classList.add("has-error")
    } else if (element && this.state[value]){
      const errorId = value + "-error"
      let error = document.getElementById(errorId)
      // error.classList.add("hidden")
      element.classList.remove("has-error")
    }
  }

  render() {
    // debugger;
    this.changeBorder()
    return (
      <div className="signup-form-container">
        <div className="heading">
          <img src="static/images/black-logo-white-music.png" alt="sleepify-logo" height="30"/>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br/>
              <div className="signup-input email">
                <input id='email' 
                  type="text"
                  className="signup-border"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                  onFocus={() => this.changeBorder('email')}
                  onBlur={() => this.changeBorderOnBlur('email')}
                />
                <div id='email-error' className='signup error-div'>
                  {this.state.errors.email}
                </div>
              </div>
            <br/>
              <div className="signup-input email2">
                <input id='email2'
                  type="text"
                  className="signup-border"
                  value={this.state.email2}
                  onChange={this.update('email2')}
                  placeholder="Confirm Email"
                  onFocus={() => this.changeBorder('email2')}
                  onBlur={() => this.changeBorderOnBlur('email2')}
                />
                <div  id='email2-error' className='signup error-div'>
                  {this.state.errors.email2}
                </div>
              </div>
            <br/>
              <div className="signup-input password">
                <input id='password' 
                  type="password"
                  className="signup-border"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  onFocus={() => this.changeBorder('password')}
                  onBlur={() => this.changeBorderOnBlur('password')}
                />
                <div id='password-error' className='signup error-div'>
                  {this.state.errors.password}
                </div>
              </div>
            <br/>
              <div className="signup-input password2">
                <input id='password2'
                  type="password"
                  className="signup-border"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                  onFocus={() => this.changeBorder('password2')}
                  onBlur={() => this.changeBorderOnBlur('password2')}
                />
                <div id='password2-error' className='signup error-div'>
                  {this.state.errors.password2}
                </div>
              </div>
            <br/>
              <div className="signup-input username">
                <input 
                  id='username'
                  type="text"
                  className="signup-border"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                  onFocus={() => this.changeBorder('username')}
                  onBlur={() => this.changeBorderOnBlur('username')}
                />
                <div id='username-error' className='signup error-div'>
                  {this.state.errors.username}
                </div>
              </div>
            <br/>
              <div className="signup-input birthdate">
                <label>
                  Date of Birth
                  <div className="birthdate">
                    <input id='birthdate'
                      type="Date"
                      className="signup-border"
                      value={this.state.birthdate}
                      onChange={this.update('birthdate')}
                      onFocus={() => this.changeBorder('birthdate')}
                      onBlur={() => this.changeBorderOnBlur('birthdate')}
                    />
                    <div id='birthdate-error' className='signup error-div'>
                      {this.state.errors.birthdate}
                    </div>
                  </div>
                </label>
              </div>
            <br/>
            <div className="signup-disclaimer">
              <p>By signing up, you agree to Sleepify's Terms and Conditions of Use</p>
            </div>
            <div className="signup-button">
              <input type="submit" value="SIGN UP" />
            </div>
            <div className="login-instead">
              <label>
                Already have an account? 
                <Link to='/login'> Log in </Link>
              </label>
            </div>

          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);