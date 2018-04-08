import React from 'react';
import firebase from 'firebase';
import {FirebaseAuth} from 'react-firebaseui';

import PureRenderComponent from './pure-render';

export default class Auth extends PureRenderComponent {
  loginConfig = {
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => {
        window.location.reload(false); // reload the page so firebase can sign out properly (bug)
        return false; // indicate no redirect url
      },
      signInFailure: error => {
        console.error(`Firebase sign-in failure:`, error);
      },
    },
  }

  render = () =>
    <div className="auth-component">
      {
        !this.props.state.loadingAuthState && (
          this.props.state.user ?
          <button onClick={this.logout}>Logout</button> :
          <FirebaseAuth uiConfig={this.loginConfig} firebaseAuth={firebase.auth()} />
        )
      }
    </div>

  componentDidMount() {
    this.unregisterAuthObserver =
      firebase.auth().onAuthStateChanged(this.props.dispatch.changeUser);
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  logout = () => firebase.auth().signOut();
}
