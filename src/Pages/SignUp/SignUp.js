import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const SignUp = () => {

    const { userWithEmailPass, signUpGoogle, signupGitHub } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()


    const handleEmailPass = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoUrl.value;
        const password = form.password.value;

        form.reset()

        console.log(name, email, password)
        userWithEmailPass(email, password).then(result => {
            const user = result.user;
            console.log(user)
            setError('')
            navigate('/')

        }).catch(error => console.error(error));

    }

    // Google Handle
    const handleGoogle = () => {
        signUpGoogle(googleProvider).then(result => {
            const user = result.user;
            console.log(user);


        }).catch(error => {
            console.log(error)
            setError(error.message)
        }
        )

    };

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
                <h1 className='text-red-600'>{error}</h1>
                <br />
                <input className='mb-2 btn  btn-primary' type="submit" value="Sign UP" />

                <button onClick={handleGoogle} className='mb-2 btn btn-outline btn-accent'> <FaGoogle /> Sign up With Google</button>
                <button onClick={handleGitHub} className='mb-2 btn btn-outline '> <FaGithub />  Sign up With GitHub</button>


                <p>Already have an account? <Link to={'/login'} > <span className='text-blue-700 font-semibold'>Login Please</span></Link> </p>
            </form >

        </div>
    );
};

export default SignUp;