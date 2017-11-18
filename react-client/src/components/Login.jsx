import React from 'react';
import axios from 'axios'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      this.loginRequest = this.loginRequest.bind(this)
    }

  loginRequest(value) {
    // if we wanted something besides the oAuth to run when you press the 
    // login button, we could put it here. 
    // console.log('the login request gets called')
  }

  // this login runs /auth, which itself redirects to /auth/callback which redirects to /records
  render() {
    return(
      <div>
          <h1>Login With Google</h1>
          <a href='/auth'> 
            <button type="submit" onClick={() => {this.loginRequest()}}>
             Login With Google 
            </button>
          </a>
      </div>

    )
  }
}