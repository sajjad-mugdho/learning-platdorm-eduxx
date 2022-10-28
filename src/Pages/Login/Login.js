import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {

    const { loginEmailPass, signUpGoogle, signupGitHub } = useContext(AuthContext);

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';

    const [error, setError] = useState('');

    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()


    // Google Handle
    const handleGoogle = () => {
        signUpGoogle(googleProvider).then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
        }).catch(error => {
            console.log(error)
            setError(error.message)
        }
        )
    }

    // GitHub Handle 
    const handleGitHub = () => {
        signupGitHub(githubProvider).then(result => {
            const user = result.user;
            console.log(user);
        }).catch(error => {
            console.error(error)
            setError(error.message)
        })
    }

    const handleEmailPass = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);



        loginEmailPass(email, password).then(result => {
            const user = result.user;
            console.log(user)
            setError('')
            navigate(from, { replace: true })
            form.reset()

        }).catch(error => {
            console.error(error)
            setError(error.message)
        });
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
                <h1 className='text-red-600'>{error}</h1>
                <br />
                <input className='mb-2 btn  btn-primary' type="submit" value="Login" />

                <button onClick={handleGoogle} className='mb-2 btn btn-outline btn-accent'> <FaGoogle /> Login With Google</button>
                <button onClick={handleGitHub} className='mb-2 btn btn-outline '> <FaGithub />  Login With GitHub</button>


                <p>Don't have a account? <Link to={'/signup'} > <span className='text-blue-700 font-semibold'>Sign Up Please</span></Link> </p>

            </form >
        </div>
    );
};

export default Login;