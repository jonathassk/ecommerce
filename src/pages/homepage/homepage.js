import React from 'react';
import './homepage.styles.scss';
import HomeMenu from '../../components/menuitem/homemenu';

const Homepage = () => (
    <div className='homepage'>
        <div className='menu'>
            <div className='menu-item_secundary'>
              <HomeMenu />
            </div>
        </div>
    </div>
)

export default Homepage;