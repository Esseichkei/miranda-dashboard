import { AuthContext } from "../auth";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginContainer, LoginFullScreen, LoginForm, LoginInputDiv, LoginButton, LoginInputField } from "./LoginStyles";

export function Login(props) {
    const auth = useContext(AuthContext);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [failed, setFailed] = useState(false);
    const changeUser = (ev) => {
        setUser(ev.target.value);
    };
    const changePass = (ev) => {
        setPassword(ev.target.value);
    }
    const tryLoggingIn = (ev) => {
        ev.preventDefault();
        if (!auth.logIn(user, password)) {
            setUser('');
            setPassword('');
            setFailed(true);
        }
    }
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setFailed(false);
        }, 1000);
        return () => {clearTimeout(timeoutId);};
    },[failed]);
    if (auth.isLoggedIn()) {
        return <Navigate to='/'/>;
    } else {
        return (
            <LoginFullScreen>
                <LoginContainer>
                    <h1>Login!</h1>
                    <LoginForm onSubmit={tryLoggingIn}>
                        <LoginInputDiv>
                            <label htmlFor='user'>User</label>
                            <LoginInputField type='text' name='user' value={user} onChange={changeUser} autoComplete='username'></LoginInputField>
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