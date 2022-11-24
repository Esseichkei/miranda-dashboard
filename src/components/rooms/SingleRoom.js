import { useParams } from "react-router-dom";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { MainDiv } from "./RoomsStyles";
import { useState } from "react";

export function SingleRoom (props) {
    const params = useParams();
    const [sidebarShow, setSidebarShow] = useState(true);
    const sidebarToggle = () => {
        setSidebarShow(!sidebarShow);
    }
    return (
        <MainDiv sidebarShow={sidebarShow}>
            <Header sidebarShow={sidebarShow} toggleSidebar={sidebarToggle} title={`Room #${params.id}`}/>
            <Sidebar sidebarShow={sidebarShow} />
            <h1>Room #{params.id}</h1>
        </MainDiv>
    );
}