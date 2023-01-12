import { AuthContext } from "../auth";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginContainer, LoginFullScreen, LoginForm, LoginInputDiv, LoginButton, LoginInputField } from "./LoginStyles";

export function Login(props) {
    const auth = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [failed, setFailed] = useState(false);
    const [loginEnabled, setLoginEnabled] = useState(true);
    const changeEmail = (ev) => {
        setEmail(ev.target.value);
    };
    const changePass = (ev) => {
        setPassword(ev.target.value);
    }
    const tryLoggingIn = async (ev) => {
        ev.preventDefault();
        if (!loginEnabled) {
            return
        }
        setLoginEnabled(false);
        const response = await fetch(process.env.REACT_APP_API_URI + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const data = await response.json();
        if (data.token !== undefined) {
            localStorage.setItem('APIToken', data.token)
            auth.authDispatch({type: 'login'});
        }
        else {
            setFailed(true);
        }
        setLoginEnabled(true);
    }
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setFailed(false);
        }, 1000);
        return () => {clearTimeout(timeoutId);};
    },[failed]);
    if (auth.authState.authenticated) {
        return <Navigate to='/'/>;
    } else {
        return (
            <LoginFullScreen>
                <LoginContainer>
                    <h1>Login!</h1>
                    <LoginForm onSubmit={tryLoggingIn}>
                        <LoginInputDiv>
                            <label htmlFor='email'>User</label>
                            <LoginInputField type='text' name='email' value={email} onChange={changeEmail} autoComplete='email'></LoginInputField>
                        </LoginInputDiv>
                        <LoginInputDiv>
                            <label htmlFor='password'>Password</label>
                            <LoginInputField type='password' name='password' value={password} onChange={changePass} autoComplete='current-password'></LoginInputField>
                        </LoginInputDiv>
                        <LoginButton type="submit" value="Log in" failed={failed}/>
                    </LoginForm>
                </LoginContainer>
            </LoginFullScreen>
        );
    }
}