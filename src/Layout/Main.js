import React from 'react';
import { Outlet } from 'react-router-dom';



import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import RightSidebar from '../Shared/RightSideBar/RightSidebar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex flex-row '>
                <div className='basis-3/4'>
                    <Outlet></Outlet>
                </div>
                <div className='basis-1/4'>
                    <RightSidebar></RightSidebar>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;