import { AuthContext } from "../auth";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginContainer, LoginFullScreen, LoginForm, LoginInputDiv, LoginButton, LoginInputField } from "./LoginStyles";

export function Login(props) {
    const auth = useContext(AuthContext);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const changeUser = (ev) => {
        setUser(ev.target.value);
    };
    const changePass = (ev) => {
        setPassword(ev.target.value);
    }
    const tryLoggingIn = (ev) => {
        ev.preventDefault();
        auth.logIn(user, password)
    }
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
                        <LoginButton type="submit" value="Log in"/>
                    </LoginForm>
                </LoginContainer>
            </LoginFullScreen>
        );
    }
}