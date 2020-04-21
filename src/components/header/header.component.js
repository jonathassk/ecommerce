import React, { Component } from 'react';
import './header.styles.scss';
import  { Link } from 'react-router-dom';

export default class Header extends Component {
  render(){
    console.log(this.props)
    return(
      <div className='header-div'>
        <div className='logo'><p>logo</p></div>
        <div className='header-div_rigthSide'>
          <Link to={''} className='header_nav'>login</Link>
          <Link to={'/login'} className='header_nav'>login</Link>
        </div>
      </div>
    );
  }
}