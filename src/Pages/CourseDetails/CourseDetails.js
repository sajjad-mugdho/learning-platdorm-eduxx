import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h1>{courses.length}</h1>
        </div>
    );
};

export default CourseDetails;