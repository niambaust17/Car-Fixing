import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, } from "firebase/auth"
import { useLocation, useNavigate } from "react-router-dom";
import initializeAuthentication from './../firebase/firebase.init';
import Swal from "sweetalert2";

initializeAuthentication();

const useFirebase = () =>
{
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () =>
    {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) =>
            {
                setUser(result.user);
                setError('');
                if (location.state?.from)
                {
                    navigate(location.state.from);
                }
                else
                {
                    navigate('/home');
                }
            })
            .catch((error) =>
            {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    const emailSignUp = (displayName, email, password) =>
    {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>
            {
                Swal.fire('Signup Successful', '', 'success');
                setUser(userCredential.user);
                setError('');
                verifyEmail();
                updateProfile(auth.currentUser, {
                    displayName,
                }).then(() =>
                {
                    navigate(location.state?.from || '/home');
                })
            })
            .catch((error) =>
            {
                const errorMessage = error.message;
                setError(errorMessage);
                navigate('/login');
            })
    }

    const emailSignIn = (email, password) =>
    {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>
            {
                Swal.fire('Signin Successful', '', 'success');
                setUser(userCredential.user);
                setError('');
                navigate(location.state?.from || '/home');
            })
            .catch((error) =>
            {
                const errorMessage = error.message;
                setError(errorMessage);
                navigate('/login');
            })
    }

    const verifyEmail = () =>
    {
        sendEmailVerification(auth.currentUser)
            .then((result) =>
            {
                Swal.fire('Please check your email for verify yourself', '', 'success');
            });
    }

    const resetPassword = (email) =>
    {
        console.log(email);
        sendPasswordResetEmail(auth, email)
            .then(() =>
            {
                Swal.fire('Please check your email', '', 'success');
            })
            .catch((error) =>
            {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const logOut = () =>
    {
        setIsLoading(true);
        signOut(auth).then(() =>
        {
            Swal.fire('Logout Successful', '', 'success');
        }).catch(error =>
        {
            Swal.fire('Something Wrong', '', 'error');
        })
    }

    useEffect(() =>
    {
        const unsubscribed = onAuthStateChanged(auth, (user) =>
        {
            if (user)
            {
                setUser(user);
            } else
            {
                setUser({});
            }
            setIsLoading(false);
        });

        return () => unsubscribed;
    }, [auth])

    return {
        user,
        error,
        isLoading,
        googleSignIn,
        emailSignUp,
        emailSignIn,
        resetPassword,
        logOut
    }
}

export default useFirebase