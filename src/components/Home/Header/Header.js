import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';

const Header = () =>
{
    return (
        <div style={{ backgroundColor: 'lightgoldenrodyellow' }}>
            <Navbar />
            <HeaderMain />
        </div>
    );
};

export default Header;