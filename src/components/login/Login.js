import { AuthContext } from "../auth";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginContainer, LoginFullScreen, LoginForm, LoginInputDiv, LoginButton, LoginInputField } from "./LoginStyles";

export function Login(props) {
    const auth = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [failed, setFailed] = useState(false);
    const changeEmail = (ev) => {
        setEmail(ev.target.value);
    };
    const changePass = (ev) => {
        setPassword(ev.target.value);
    }
    const tryLoggingIn = (ev) => {
        ev.preventDefault();
        if (email !== "cat@catmail.com" || password !== "meow") {
            setEmail('');
            setPassword('');
            setFailed(true);
        }
        else {
            auth.authDispatch({type: 'login'});
        }
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