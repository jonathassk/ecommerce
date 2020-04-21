import React, { Component } from 'react';
import './login.styles.scss';
import {singInWithGoogle} from "../../firebase/firebase.utils";

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
        <button className='buttonLogin' onClick={singInWithGoogle}>Login com conta google</button>
        <p className='forgotLogin'>Esqueceu seus dados?</p>
      </>
    );
  }
}