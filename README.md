# react-facebook-login-component
> React Facebook Component to log users in through facebook

[![version](https://img.shields.io/npm/v/react-facebook-login-component.svg?style=flat-square)](http://npm.im/react-google-login-component)
[![MIT License](https://img.shields.io/npm/l/react-facebook-login-component.svg?style=flat-square)](http://opensource.org/licenses/MIT)

react-facebook-login-component is a module that easily lets you drop it into
your existing project and get the benefits of Facebook Login. It's a plug and
play component that'll fit in your workflow if your using standalone React or
React with Redux.

You can find login with Google [here](https://github.com/kennetpostigo/react-google-login-component)

##### Up to date with the latest API Version

## Usage
```bash
npm install --save react-facebook-login-component
```

```js
import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';

class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseFacebook (response) {
    console.log(response);
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div>
        <FacebookLogin socialId="yourAppID"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"
                       buttonText="Login With Facebook"/>
      </div>
    );
  }

}

export default Login;

```
