import { Button } from '@mui/material';
import React from 'react';
import './Login.css';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


function Login() {
    const [state, dispatch] = useStateValue();

    const signInWithGoogle =() => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error)=> alert(error.message));
    };
  return (
    <div className='login'>
        <div className="login__logo">
            <img 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
            alt=""
            />
            <img
            src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
            alt=""
            />
            </div>
            <Button type='submit' onClick={signInWithGoogle}
            >
                Sign In
            </Button>
        
    </div>
  )
}

export default Login;