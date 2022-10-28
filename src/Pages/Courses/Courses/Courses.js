import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../../Shared/Course/Course';


const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='grid lg:grid-cols-2 lg:ml-10 lg:my-10 md:grid-cols-1 sm:grid-cols-2 sm:mx-3 sm:my-3   gap-5'>

            {
                courses.map(course => <Course course={course}></Course>)
            }
        </div>
    );
};

export default Courses;