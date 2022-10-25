import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="navbar mb-3 flex justify-between bg-primary text-primary-content">
            <Link className="btn btn-ghost normal-case text-2xl ml-5" to={'/'}>Eduxx</Link>
            <div className='mr-5'>
                <button className='btn btn-ghost'><Link to={'/'}>Home</Link></button>
                <button className='btn btn-ghost'><Link to={'/courses'}>Courses</Link></button>
                <button className='btn btn-ghost'><Link to={'/blog'}>Blog</Link></button>
                <button className='btn btn-ghost'><Link to={'/login'}>Login</Link></button>
                <button className='btn btn-ghost'><Link to={'/signup'}>SignUp</Link></button>
                <button className='btn btn-ghost'><Link to={'/faq'}>FAQ</Link></button>
            </div>
        </div>

    );
};

export default Header;