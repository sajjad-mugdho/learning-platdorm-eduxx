import React from 'react';

const Blog = () => {
    return (
        <div className='mx-5 my-5'>
            <div tabIndex={0} className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    what is cors?
                </div>
                <div className="collapse-content">
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>
                        Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                        <br />
                        The bottom line is that there are a lot of things that you probably don’t want to manage yourself, such as building and maintaining a scalable database and file store, (serverless) backend code, notifications, analytics, and more. Don’t build all this yourself, just use Firebase.</p><br />
                    <p>
                        It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, Github, Apple, Yahoo and many more.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse  mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does the private route work?
                </div>
                <div className="collapse-content">
                    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p>What is Node. JS?

                        <ul>
                            <li>
                                It allows developers to run JavaScript outside of a web browser
                            </li>
                            <li>You need to know JavaScript to use Node</li>
                            <li>Node itself is not actually JavaScript, it’s in C, but it reads JavaScript (so you don’t need to learn C)
                            </li>
                        </ul>
                    </p>
                    <br />
                    <p>
                        Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;