import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SinglePost from '../SinglePost/SinglePost';
import './Single.css';

const Single = () => {
    return (
        <div>
            <div className="single">
                <SinglePost />
                <Sidebar />
            </div>
        </div>
    );
};

export default Single;