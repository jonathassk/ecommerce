import React, { Component } from 'react';
import './login.styles.scss';

export default class LoginDiv extends Component {
  render () {
    return (
      <>
        <p className='loginTitle'>Login</p>
        <label htmlFor='usernameInput' className='labelForm'>Username</label>
        <input type='text' className='loginInput' id='usernameInput'/>
        <label htmlFor='passwordInput' className='labelForm'>Password</label>
        <input type='password' className='loginInput' id='passwordInput'/>
        <button className='buttonLogin'>Login</button>
        <p className='forgotLogin'>Esqueceu seus dados?</p>
      </>
    );
  }
}