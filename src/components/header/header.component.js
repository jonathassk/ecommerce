import React, { Component } from 'react';
import './header.styles.scss';
import  { Link } from 'react-router-dom';
import { auth} from "../../firebase/firebase.utils";

export default class Header extends Component {
  render(){
    return(
      <div className='header-div'>
        <div className='logo'><p>logo</p></div>
        <div className='header-div_rigthSide'>
          {this.props.user ? <p onClick={() => {
            auth.signOut();
          }}>Sair</p> : <Link to={'/login'} className='header_nav'>login</Link>}
        </div>
      </div>
    );
  }
}