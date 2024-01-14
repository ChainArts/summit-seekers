import React from 'react';
import { scrollToTop } from './functions';

const NavBar = () => {
    const isHomePage = window.location.pathname === '/';


    return (
        <ul>
            <li> {isHomePage ? <a href="#" onClick={(e) => { e.preventDefault; scrollToTop() }}>Summit Seekers</a> : <a href="/">Summit Seekers</a>}</li>
            <li><a href="/#booking">Booking</a></li>
            <li><a href="/#expeditions">Expeditions</a></li>
            <li><a href="/#adventure">Adventure</a></li>
            <li><a href="/#about">About</a></li>
        </ul>
    )
}

export default NavBar;