import { MainDiv } from "./PageStyles";
import { useContext, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Sidebar } from "../components/sidebar/Sidebar";
import { AuthContext } from "../components/auth";

export function Page (props) {
    const auth = useContext(AuthContext);
    const [title, setTitle] = useState('Title');
    const [sidebarShow, setSidebarShow] = useState(true);
    const sidebarToggle = () => {
        setSidebarShow(!sidebarShow);
    }
    const logOut = () => {
        auth.authDispatch({type: 'logout'});
    }
    if (!auth.authState.authenticated) {
        return <Navigate to='/login'/>;
    } else {
        return (
            <MainDiv sidebarShow={sidebarShow}>
                <Header sidebarShow={sidebarShow} toggleSidebar={sidebarToggle} title={title}/>
                <Sidebar sidebarShow={sidebarShow} logOut={logOut} />
                <Outlet context={setTitle} />
            </MainDiv>
        );
    }
}