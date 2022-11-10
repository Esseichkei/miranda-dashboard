import { AuthContext } from "../auth";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

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
    const tryLoggingIn = () => {
        auth.logIn(user, password)
    }
    if (auth.isLoggedIn()) {
        return <Navigate to='/'/>;
    } else {
        return (
            <div>
                <h1>Login!</h1>
                <label htmlFor='user'>User</label>
                <input type='text' name='user' value={user} onChange={changeUser}></input>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' value={password} onChange={changePass}></input>
                <button onClick={tryLoggingIn}>Log in!</button>
            </div>
        );
    }
}