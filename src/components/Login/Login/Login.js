import React, { useRef, useState } from 'react';
import "firebase/auth";
import './Login.css';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from "react-icons/fc";

const Login = () =>
{
    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();
    let confirmPasswordRef = useRef();

    const [passwordError, setPasswordError] = useState('');
    const [newUser, setNewUser] = useState(false);
    const { error, googleSignIn, emailSignUp, emailSignIn, resetPassword } = useAuth();

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        if (newUser)
        {
            if (passwordRef.current.value !== confirmPasswordRef.current.value)
            {
                return setPasswordError('Password do not match');
            }

            await emailSignUp(nameRef.current.value, emailRef.current.value, confirmPasswordRef.current.value);
        }

        if (!newUser)
        {
            await emailSignIn(emailRef.current.value, passwordRef.current.value);
        }
    }

    const handleResetPassword = () =>
    {
        resetPassword(emailRef.current.value);
    }

    return (
        <div className="login_container text-center">
            <div className="login_body">
                {
                    error && <div className="alert alert-danger" role="alert">{error}</div>
                }
                {
                    passwordError && <div className="alert alert-danger" role="alert">{passwordError}</div>
                }
                <form onSubmit={handleSubmit}>
                    {newUser && <input className="form-control mb-2" type="text" placeholder="Name" ref={nameRef} required />}
                    <input className="form-control mb-2" type="email" placeholder="Email" ref={emailRef} required />
                    <input className="form-control mb-2" type="password" placeholder="Password" ref={passwordRef} required />
                    {newUser && <input className="form-control mb-2" type="password" placeholder="Confirm Password" ref={confirmPasswordRef} required />}
                    <button className="w-100 btn btn-primary mb-2" type="submit">{newUser ? 'Sign Up' : 'Log In'}</button>
                </form>
                <div className="w-100 text-center mb-2">{newUser ? 'Already have an account?' : 'Create an account?'} <span style={{ cursor: 'pointer' }} onClick={() => setNewUser(!newUser)}>{newUser ? 'Log In' : 'Sign Up'}</span></div>
                <div className="w-100 text-center mb-2" style={{ cursor: 'pointer' }} onClick={handleResetPassword}>Forgot Password</div>
                <div className="google_login"
                    onClick={googleSignIn}
                >
                    <FcGoogle size="32px" />
                    <p style={{ marginBottom: 0, padding: '0 10px' }}>Log in with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;