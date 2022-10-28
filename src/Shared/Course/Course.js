import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {

    const { name, img, details, price, id } = course;
    return (
        <div className="card w-96 glass">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0, 100)}...more</p>
                <p className='font-semibold '>Price: <span className='text-orange-500'>${price}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/courses/${id}`}>  Enroll Now</Link></button >
                </div>
            </div>
        </div>
    );
};

export default Course;