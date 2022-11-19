import { HeaderDiv, HeaderLeftDiv, MainDiv, SidebarDiv, SidebarToggle, HeaderRightDiv, HeaderSearchField, HeartDiv, EnvelopeDiv, BellDiv, MessaageDiv, UserDiv, SidebarTitle, SidebarTitleIcon, SidebarNavLink, SidebarIconWrapper } from "./RoomsStyles";
import { useState } from "react";
import { ReactComponent as GridSvg } from "../../img/grid-interface-layout-icon.svg";
import { ReactComponent as KeySvg } from "../../img/key-line-icon.svg";

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
                    <HeartDiv />
                    <EnvelopeDiv />
                    <BellDiv />
                    <MessaageDiv />
                    <UserDiv />
                </HeaderRightDiv>
            </HeaderDiv>
            <SidebarDiv sidebarShow={sidebarShow}>
                <SidebarTitle>
                    <SidebarTitleIcon/>
                    <h2>Miranda!</h2>
                </SidebarTitle>
                <SidebarNavLink to="/" end>
                    <SidebarIconWrapper><GridSvg /></SidebarIconWrapper>
                    <h3>Dashboard</h3>
                </SidebarNavLink>
                <SidebarNavLink to="/rooms" end>
                    <SidebarIconWrapper><KeySvg /></SidebarIconWrapper>
                    <h3>Rooms</h3>
                </SidebarNavLink>
            </SidebarDiv>
            <h1>Rooms!</h1>
        </MainDiv>);
}