/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className='top'>
            <div className="topLeft">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-linkedin"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Log</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImage" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Profile Image" />
                <i class="fas fa-search"></i>
            </div>
        </div>
    );
};

export default TopBar;