import { MainDiv } from "./PageStyles";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Sidebar } from "../components/sidebar/Sidebar";

export function Page (props) {
    const [title, setTitle] = useState('Title')
    const [sidebarShow, setSidebarShow] = useState(true);
    const sidebarToggle = () => {
        setSidebarShow(!sidebarShow);
    }
    return (
        <MainDiv sidebarShow={sidebarShow}>
            <Header sidebarShow={sidebarShow} toggleSidebar={sidebarToggle} title={title}/>
            <Sidebar sidebarShow={sidebarShow} />
            <Outlet context={setTitle} />
        </MainDiv>
    );
}