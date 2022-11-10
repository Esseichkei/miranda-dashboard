import { createContext } from "react";

export let loggedIn = sessionStorage.getItem('loggedIn') !== undefined ? sessionStorage.getItem('loggedIn') : false;
const User = 'cat';
const Password = 'meow';
export function isLoggedIn() {
    return loggedIn;
}
export function logIn(user, password) {
    if (user === User && password === Password) {
        loggedIn = true;
        sessionStorage.setItem('loggedIn', 'true');
        return true;
    }
    else {
        return false;
    }
}
export function logOut() {
    loggedIn = false;
    sessionStorage.removeItem('loggedIn');
    return false;
}
export const AuthContext = createContext(null);