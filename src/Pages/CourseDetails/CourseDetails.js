import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courses = useLoaderData();
    const { id, name, details, img, price } = courses;
    return (
        <div className="card w-100 glass">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p className='font-semibold '>Price: <span className='text-orange-500'>${price}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/checkout/${id}`}>Get Premium Access</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;