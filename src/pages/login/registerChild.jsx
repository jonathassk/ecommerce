import React, {Component} from 'react';
import './login.styles.scss';

export default class RegisterChild extends Component {
  render(){
    return(
      <>
        <p className='loginTitle'>Register</p>
        <input type='text' className='loginInput'/>

      </>
    );
  }
}