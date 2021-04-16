import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}
else
{
    firebase.app();
}

const Login = () =>
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) =>
    {
        if (redirect)
        {
            history.replace(from);
        }
    }

    const handleGoogleSignIn = () =>
    {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((res) =>
            {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    displayName,
                    email,
                    imgSrc: photoURL,
                };
                setLoggedInUser(signedInUser);
                handleResponse(res, true)
            }).catch((err) =>
            {
                const errorCode = err.code;
                const errorMessage = err.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div className="container text-center">
            <h1 className="my-5">Please Login</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src="" alt="" />
                </div>
                <div className="col-md-6">
                    <button onClick={handleGoogleSignIn} className="btn btn-outline-success btn-lg">Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;