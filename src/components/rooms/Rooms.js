import { HeaderDiv, MainDiv, SidebarDiv } from "./RoomsStyles";
import { useState } from "react";

export function Rooms(props) {
    const [sidebarShow, setSidebarShow] = useState(true);
    const toggleSidebar = () => {
        setSidebarShow(!sidebarShow);
    };
    return (<MainDiv sidebarShow={sidebarShow}>
            <HeaderDiv sidebarShow={sidebarShow}>
                <p>Header!</p>
                <button onClick={toggleSidebar}>Toggle Sidebar!</button>
            </HeaderDiv>
            <SidebarDiv sidebarShow={sidebarShow}>
                <p>Sidebar!</p>
            </SidebarDiv>
            <h1>Rooms!</h1>
        </MainDiv>);
}