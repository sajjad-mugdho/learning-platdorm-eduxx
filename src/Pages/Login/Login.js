import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { loginEmailPass, signUpGoogle } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogle = () => {
        signUpGoogle(googleProvider).then(result => {
            const user = result.user;
            console.log(user);
        }).catch(error => console.error(error))
    }


    const handleEmailPass = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginEmailPass(email, password).then(result => {
            const user = result.user;
            console.log(user)
        }).catch(error => console.error(error));
    }
    return (
        <div className='grid  justify-center my-10'>
            <div>
                <h1 className='text-2xl mb-4 font-bold'>Login</h1>
            </div>
            <form onSubmit={handleEmailPass} className='flex flex-col '>

                <label>Email</label>
                <input name='email' type="email" placeholder="Email" className="input mb-2 input-bordered input-primary w-full max-w-xs" />


                <label>Password</label>
                <input name='password' type="password" placeholder="password here" className="input mb-2 input-bordered input-primary w-full max-w-xs" />
                <br />
                <input className='mb-2 btn  btn-primary' type="submit" value="Login" />

                <button onClick={handleGoogle} className='mb-2 btn btn-outline btn-accent'> <FaGoogle /> Login With Google</button>
                <button className='mb-2 btn btn-outline '> <FaGithub />  Login With GitHub</button>


                <p>Don't have a account? <Link to={'/signup'} > <span className='text-blue-700 font-semibold'>Sign Up Please</span></Link> </p>
            </form >
        </div>
    );
};

export default Login;