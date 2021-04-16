import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';

const Header = () =>
{
    return (
        <div style={{ backgroundColor: 'lightgoldenrodyellow', height: '100vh' }}>
            <Navbar />
            <HeaderMain />
        </div>
    );
};

export default Header;