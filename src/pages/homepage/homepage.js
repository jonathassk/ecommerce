import React from 'react';
import './homepage.styles.scss';
import HomeMenu from '../../components/menuitem/homemenu';

const Homepage = () => (
    <div className='homepage'>
        <div className='menu'>
            <div className='menu-item_primary'>
                    <h1 className='menu-item_content_title'>CARROS</h1>
                    <h2 className='menu-item_content_subtitle'>COMPRE AGORA</h2>
            </div>
            <div className='menu-item_secundary'>
              <HomeMenu />
            </div>
        </div>
    </div>
)

export default Homepage;