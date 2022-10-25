import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const SignUp = () => {

    const { userWithEmailPass } = useContext(AuthContext);

    const handleEmailPass = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoUrl.value;
        const password = form.password.value;
        console.log(name, email, password)
        userWithEmailPass(email, password).then(result => {
            const user = result.user;
            console.log(user)
        }).catch(error => console.error(error));

    }

    return (
        <div className='grid  justify-center my-10'>
            <div>
                <h1 className='text-2xl mb-4 font-bold'>Sign up</h1>
            </div>
            <form onSubmit={handleEmailPass} className='flex flex-col '>
                <label>Name</label>
                <input name='name' type="text" placeholder="Name" className="input mb-2 input-bordered input-primary w-full max-w-xs" />

                <label>Email</label>
                <input name='email' type="email" placeholder="Email" className="input mb-2 input-bordered input-primary w-full max-w-xs" />

                <label>Photo URL</label>
                <input name='photoUrl' type="text" placeholder="Photo URL" className="input mb-2 input-bordered input-primary w-full max-w-xs" />

                <label>Password</label>
                <input name='password' type="password" placeholder="password here" className="input mb-2 input-bordered input-primary w-full max-w-xs" />
                <br />
                <input className='mb-2 btn  btn-primary' type="submit" value="Sign UP" />

                <button className='mb-2 btn btn-outline btn-accent'> <FaGoogle /> Sign up With Google</button>
                <button className='mb-2 btn btn-outline '> <FaGithub />  Sign up With GitHub</button>


                <p>Already have an account? <Link to={'/login'} > <span className='text-blue-700 font-semibold'>Login Please</span></Link> </p>
            </form >

        </div>
    );
};

export default SignUp;