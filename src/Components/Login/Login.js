import React from 'react';
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from '../../firebase';
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";



function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // signIn
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message)); 
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://th.bing.com/th/id/R.aa4991274b537f2759ec04a94f6e1258?rik=%2fXCOt6VMK%2biQvQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_5483.png&ehk=470DvjMB%2bKDo2ttVlQO4J3mjl3Q8sOK82hZU6IdPl54%3d&risl=&pid=ImgRaw&r=0" alt=" Logo " className="logo"  />
            </div>
            <div className="login__logo_two">
                <img src="https://th.bing.com/th/id/R.b86c7689da8b50ab7ea7d888a019afbe?rik=Qh%2fYJsQMuv6GQw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxcg%2fnBy%2fxcgnByxAi.png&ehk=TGhi9MjDFdeC5dM63ZWsjbhfutvm5v1dsUCGeXheP4o%3d&risl=&pid=ImgRaw&r=0" alt=" Logo " className="logo"  />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            <p>Leave a message for the facebook clone developer in the feeds.</p>
        </div>
    )
}

export default Login
