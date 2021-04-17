import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import google from '../../../images/google.png'

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

    const setUserToken = () =>
    {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken)
        {
            sessionStorage.setItem('token', idToken);
        }).catch(function (error)
        {
            // Handle error
        });
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
                setUserToken();
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
            <div className="row">
                <div className="login-bg col-md-6">
                </div>
                <div className="col-md-6 text-center">
                    <h1 className="my-5">Please Login</h1>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline-success btn-lg">
                        <img src={google} alt="" style={{ width: '22px' }} /> Connect with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;