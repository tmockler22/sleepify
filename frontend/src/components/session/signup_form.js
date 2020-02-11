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

  changeBorder() {
    let elements = document.querySelectorAll('.signup-border');
    if (elements) {
      Array.from(elements).forEach(elm => {
        elm.classList.add('has-error')
      });
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
                <input type="text"
                  className="signup-border"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
                <div className='signup error-div'>
                  {this.state.errors.email}
                </div>
              </div>
            <br/>
              <div className="signup-input email2">
                <input type="text"
                  className="signup-border"
                  value={this.state.email2}
                  onChange={this.update('email2')}
                  placeholder="Confirm Email"
                />
                <div className='signup error-div'>
                  {this.state.errors.email2}
                </div>
              </div>
            <br/>
              <div className="signup-input password">
                <input type="password"
                  className="signup-border"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
                <div className='signup error-div'>
                  {this.state.errors.password}
                </div>
              </div>
            <br/>
              <div className="signup-input password2">
                <input type="password"
                  className="signup-border"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                />
                <div className='signup error-div'>
                  {this.state.errors.password2}
                </div>
              </div>
            <br/>
              <div className="signup-input username">
                <input type="text"
                  className="signup-border"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                />
                <div className='signup error-div'>
                  {this.state.errors.username}
                </div>
              </div>
            <br/>
              <div className="signup-input birthdate">
                <label>
                  Date of Birth
                  <div className="birthdate">
                    <input type="Date"
                      className="signup-border"
                      value={this.state.birthdate}
                      onChange={this.update('birthdate')}
                    />
                    <div className='signup error-div'>
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