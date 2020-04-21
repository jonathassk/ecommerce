import React, { Component } from "react";
import LoginChild from './loginChild.component';
import './login.styles.scss';

export default class Login extends Component {
  render () {
    return(
      <div className='bodyPrincipal'>
        <div className='registerDiv'>
          <LoginChild />
        </div>
      </div>
    );
  }
}