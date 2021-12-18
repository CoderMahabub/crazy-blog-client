/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../context/Context';
import './TopBar.css';

const TopBar = () => {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
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
                    <li className="topListItem"><Link className='link' to="/">Home</Link></li>
                    <li className="topListItem"><Link className='link' to="/about">About</Link></li>
                    <li className="topListItem"><Link className='link' to="/contact">Contact</Link></li>
                    <li className="topListItem"><Link className='link' to="/write">Write</Link></li>
                    {user && <li className="topListItem" onClick={handleLogout}>Logout</li>}
                </ul>
            </div>
            <div className="topRight">
                {user ? (<img
                    className="topImg"
                    src={user.profilePic}
                    alt="Profile Image" />)
                    : (
                        <ul className='topList'>
                            <li className="topListItem"><Link className='link' to="/login">Login</Link></li>
                            <li className="topListItem"><Link className='link' to="/register">Register</Link></li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default TopBar;