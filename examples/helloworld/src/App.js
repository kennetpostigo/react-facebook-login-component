import React, { Component } from 'react';
import { FacebookLogin } from 'react-facebook-login-component';

class App extends Component {
  render() {
    return (
      <div>
        <FacebookLogin socialId="yourAppID"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       version="v2.5"
                       class="facebook-login"
                       buttonText="Login With Facebook"/>
      </div>
    );
  }

  responseFacebook (response) {
    console.log(response);
    //anything else you want to do(save to localStorage)...
  }
}

export default App;
