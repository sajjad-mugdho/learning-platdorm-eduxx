import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const RightSidebar = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories').then(res => res.json()).then(data => setCategory(data));
    }, [])

    const { user, logOut } = useContext(AuthContext)


    return (
        <div className='sticky top-5' >
            <div className="card  bg-gradient-to-r from-green-100 via-blue-200 to-purple-300 w-50 shadow-xl">
                <figure className=" pt-5">
                    {user?.displayName ? <img src={user?.photoURL} alt="Shoes" className="rounded-full" /> : <FaUserAlt />}
                </figure>
                <div className="card-body  items-center text-center">
                    <h2 className="card-title">{user?.displayName}</h2>
                    {user?.displayName ? < button onClick={logOut} className='btn btn-outline mt-2'>SignOut</button> : <button className='btn btn-outline'><Link to={'/login'}>Login</Link></button>}
                </div>
            </div>
            <div className='px-5' >
                <h2 className=' text-2xl font-bold ml-20 my-5'>Coursers</h2>
                <ui className="menu menu-body mx-auto mt-5 glass w-56 px-5 rounded-box">
                    {
                        category.map(c => <li className='text-lg my-1 font-semibold'><Link to={`/courses/${c.id}`}>{c.name}</Link></li>)
                    }
                </ui>
            </div>

        </div>

    );
};

export default RightSidebar;