import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
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
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  renderSignUp() {
    return (
      <div className='render-signup'>
        <span>
          Don't have an account?
        </span>
        <div>
          <Link to='/signup' >SIGN UP FOR SPOTIFY</Link>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='login-form-container'>
        <div className='heading'>
          <img src="static/images/black-logo-white-music.png" alt="sleepify-logo" height="30"/>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='login-form'>
            <br/>
              <div className='email-input'>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email address"
                />
              </div>
            <br/>
              <div className='password-input'>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
              </div>
            <br/>
            <div className='submit-button'>
              <input type="submit" value="LOG IN" />
            </div>
            {this.renderErrors()}
          </div>
        </form>
        {this.renderSignUp()}
        <div className='disclaimer'>
          <p>By Signing Up, you agree to Sleepify's strict Terms &amp; Conditions and Privacy Policy</p>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);