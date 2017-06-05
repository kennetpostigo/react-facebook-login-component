import React from 'react';

export default class FacebookLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (function (d, s, id) {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = () => {
      FB.init({
        appId: this.props.socialId,
        xfbml: this.props.xfbml,
        cookie: this.props.cookie,
        version: this.props.version,
      });
    };
  }

  responseApi (authResponse) {
    FB.api('/me', { fields: this.props.fields }, (me) => {
      me.accessToken = authResponse.accessToken;
      this.props.responseHandler(me);
    });
  };

  checkLoginState (response) {
    if (response.authResponse) {
      this.responseApi(response.authResponse);
    } else {
      if (this.props.responseHandler) {
        this.props.responseHandler({ status: response.status });
      }
    }
  };

  clickHandler () {
    FB.login(this.checkLoginState.bind(this), { scope: this.props.scope });
  };

  render() {
    const {
      socialId, xfbml, cookie, version, language, fields, responseHandler,
      children, buttonText, ...props
    } = this.props;

    return (
      <div>
        <button {...props} onClick={this.clickHandler.bind(this)}>
          {children}
          {buttonText}
        </button>
      </div>
    );
  }
}
