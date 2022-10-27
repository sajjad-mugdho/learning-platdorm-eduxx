import React from 'react';
import { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../../Assets/Images/hero2.jpg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const RightSidebar = () => {

    const { user, logOut } = useContext(AuthContext)


    return (
        <div>
            <div className="card w-50 mt-3 mx-3 bg-base-300 shadow-xl">
                <figure className="px-10 pt-10">
                    {user?.displayName ? <img src={user?.photoURL} alt="Shoes" className="rounded-full" /> : <FaUserAlt />}
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.displayName}</h2>
                    {user?.displayName ? < button onClick={logOut} className='btn'>SignOut</button> : <button className='btn'><Link to={'/login'}>Login</Link></button>}
                </div>
            </div>
        </div>

    );
};

export default RightSidebar;