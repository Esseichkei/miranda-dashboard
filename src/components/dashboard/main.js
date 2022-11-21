import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export function Dashboard (props) {
    const auth = useContext(AuthContext);
    const tryLoggingOut = () => {
        auth.authDispatch({type: 'logout'});
    }
    if (auth.authState.authenticated) {
        return (
            <div>
                <h1>Dashboard!</h1>
                <button onClick={tryLoggingOut}>Log out</button>
            </div>
        );
    }
    else {
        return <Navigate to='/login'/>;
    }
}