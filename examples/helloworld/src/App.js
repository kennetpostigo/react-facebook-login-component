import React, { Component } from 'react';
import { FacebookLogin } from '../../../dist/react-facebook-login-component';

class App extends Component {
  render() {
    return (
      <div>
        <FacebookLogin socialId="yourAppID"
                       language="en_US"
                       scope="public_profile,email"
                       fields="id,name,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       disabled={false}
                       version="v2.5"
                       className="facebook-login"
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
