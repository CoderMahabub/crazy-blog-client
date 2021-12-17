/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-linkedin"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/">Home</Link></li>
                    <li className="topListItem"><Link to="/about">About</Link></li>
                    <li className="topListItem"><Link to="/contact">Contact</Link></li>
                    <li className="topListItem"><Link to="/write">Write</Link></li>
                    <li className="topListItem"><Link to="/login">Login</Link></li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Profile Image" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default TopBar;