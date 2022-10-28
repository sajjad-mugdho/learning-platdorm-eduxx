import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import brand2 from '../../../Assets/Images/hero2.jpg';
import Course from '../../../Shared/Course/Course';


const Home = () => {

    const courses = useLoaderData()
    return (
        <div className='mx-5 '>
            <div className="hero min-h-screen rounded-lg glass">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <img src={brand2} className="max-w-sm rounded-lg shadow-2xl" />

                    <div>
                        <h1 className="text-5xl font-bold">EduXXX E-Learning Platform</h1>
                        <p className="py-6">EduXxx has a new personality and a redefined user experience that improves online teaching and learning for educators, learners and administrators.</p>
                        <button className="btn btn-primary"><Link to={'/login'}>Get Started</Link></button>
                    </div>
                </div>
            </div>
            <div>

                <div className='ml-10 my-10 grid lg:grid-cols-2 sm:grid-col-1 gap-5'>
                    {
                        courses.map(course => <Course key={course.id}
                            course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;