import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../../Shared/Course/Course';


const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='ml-10 my-10 grid grid-cols-2 gap-5'>

            {
                courses.map(course => <Course course={course}></Course>)
            }
        </div>
    );
};

export default Courses;