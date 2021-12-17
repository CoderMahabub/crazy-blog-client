import React from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import TopBar from '../Shared/TopBar/TopBar';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css';

const Home = () => {
    return (
        <>
            <TopBar />
            <Header />
            <div className='home'>
                <Posts></Posts>
                <Sidebar></Sidebar>
            </div>
        </>
    );
};

export default Home;