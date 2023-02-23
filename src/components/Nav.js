import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { appRoutes } from '../routes/Routes';

const Nav = () => {
    return (
        <header className='header-nav'>
            <Link to={appRoutes.home.path}>M1000RR</Link>
            <Link to={appRoutes.posts.path}>M4CSL</Link>
            <Link to={appRoutes.photos.path}>M6</Link>
            <Link to={appRoutes.contacts.path}>Contacts</Link>
        </header>
    );
};

export default Nav;