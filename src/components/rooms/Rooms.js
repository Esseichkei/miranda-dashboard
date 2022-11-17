import { HeaderDiv, HeaderLeftDiv, MainDiv, SidebarDiv, SidebarToggle, HeaderRightDiv, HeaderSearchField } from "./RoomsStyles";
import { useState } from "react";

export function Rooms(props) {
    const [sidebarShow, setSidebarShow] = useState(true);
    const toggleSidebar = () => {
        setSidebarShow(!sidebarShow);
    };
    return (<MainDiv sidebarShow={sidebarShow}>
            <HeaderDiv sidebarShow={sidebarShow}>
                <HeaderLeftDiv>
                    <SidebarToggle onClick={toggleSidebar} />
                    <h2>Room List</h2>
                </HeaderLeftDiv>
                <HeaderRightDiv>
                    <HeaderSearchField type="text"/>
                </HeaderRightDiv>
            </HeaderDiv>
            <SidebarDiv sidebarShow={sidebarShow}>
                <p>Sidebar!</p>
            </SidebarDiv>
            <h1>Rooms!</h1>
        </MainDiv>);
}