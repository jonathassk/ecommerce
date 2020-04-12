import React from "react";

const MenuItem = ({ title, buttonText }) => (
  <div className='menu-item'>
    <div className='menu-item_content'>
      <h1 className='menu-item_content_title'>{title}</h1>
      <h2 className='menu-item_content_subtitle'>COMPRE AGORA</h2>
    </div>
  </div>
)

export default MenuItem;