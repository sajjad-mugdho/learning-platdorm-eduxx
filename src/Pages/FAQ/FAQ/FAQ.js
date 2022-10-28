import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div>
            <h1 className='font-extrabold text-3xl ml-5'>Frequently asked questions</h1>
            <div className='mx-5 my-5'>
                <div tabIndex={0} className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How can I pay for a course?
                    </div>
                    <div className="collapse-content">
                        <p>Eduxxx supports several different payment methods, depending on your account country and location.

                            Learn more about <Link>our payment methods.</Link></p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What if I don’t like a course I purchased?
                    </div>
                    <div className="collapse-content">
                        <p>
                            We want you to be satisfied, so all eligible courses purchased on Eduxxx can be refunded within 30 days. If you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy. </p><br />

                    </div>
                </div>
                <div tabIndex={0} className="collapse  mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Where can I go for help?
                    </div>
                    <div className="collapse-content">
                        <p>If you find you have a question about a paid course while you’re taking it, you can search for answers to your question in the Q&A or ask the instructor. <br />

                            Our Help Center has extensive information regarding Udemy’s various features, and articles with troubleshooting steps to help you quickly resolve any issues you encounter. Our support team is also happy to help. </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Is there any way to preview a course?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Yes! Learn how to preview a course, and review key information about it. This article outlines how you can search Eduxx's ever-growing library, and find courses you’re interested in taking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;