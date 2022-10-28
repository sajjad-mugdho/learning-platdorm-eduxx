import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOutRoute = () => {
    const courses = useLoaderData()
    const { name, img, price } = courses;

    return (
        <div>
            <h1 className='ml-[160px] text-purple-700 mb-5 font-extrabold text-4xl'>Checkout Boost Your Career With This Course</h1>
            <div className="card mx-auto card-side w-[500px] bg-base-100 shadow-xl">
                <figure><img className='w-[200px]' src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price:<span className='text-orange-500'>${price}</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default CheckOutRoute;