import React from 'react';

const Course = ({ course }) => {

    const { name, img, details, price } = course;
    return (
        <div className="card w-96 glass">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0, 100)}...more</p>
                <p className='font-semibold text-orange-500'>${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;