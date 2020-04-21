import React from "react";
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, buttonText, history, linkUrl,match }) => (
  <div className='menu-item' onClick={() => {
    history.push(`${match.url}${linkUrl}`);
  }}>
    <div className='menu-item_content'>
      <h1 className='menu-item_content_title'>{title}</h1>
      <h2 className='menu-item_content_subtitle'>COMPRE AGORA</h2>
    </div>
  </div>
)

export default withRouter(MenuItem);