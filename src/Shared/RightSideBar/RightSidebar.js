import React from 'react';

const RightSidebar = () => {
    return (
        <div>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                </div>
            </div>

            <ul className="menu w-56 bg-secondary text-secondary-content p-2 rounded-box">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
            </ul>

        </div>
    );
};

export default RightSidebar;