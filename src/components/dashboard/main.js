import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export function Dashboard (props) {
    const auth = useContext(AuthContext);
    const tryLoggingOut = () => {
        auth.logOut();
    }
    if (auth.isLoggedIn()) {
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