import { SidebarDiv, SidebarTitle, SidebarTitleIcon, SidebarNavLink, SidebarIconWrapper, SidebarUserDiv, SidebarUserAvatar, SidebarUserEmail, SidebarUserButton, SidebarBylineDiv, SidebarBylineBlack, SidebarBylineGrey, SidebarBylineGreyLast } from "./SidebarStyles";
import { ReactComponent as GridSvg } from "../../img/grid-interface-layout-icon.svg";
import { ReactComponent as KeySvg } from "../../img/key-line-icon.svg";
import { ReactComponent as CalendarSvg} from "../../img/schedule-calendar-icon.svg";
import { ReactComponent as AvatarSvg} from "../../img/male-icon.svg";
import { ReactComponent as JigsawSvg} from "../../img/extension-icon.svg";

export function Sidebar(props) {
    return (
        <SidebarDiv sidebarShow={props.sidebarShow}>
            <SidebarTitle>
                <SidebarTitleIcon/>
                <h2>Miranda!</h2>
            </SidebarTitle>
            <SidebarNavLink to="/" end>
                <SidebarIconWrapper><GridSvg /></SidebarIconWrapper>
                <h3>Dashboard</h3>
            </SidebarNavLink>
            <SidebarNavLink to="/rooms">
                <SidebarIconWrapper><KeySvg /></SidebarIconWrapper>
                <h3>Rooms</h3>
            </SidebarNavLink>
            <SidebarNavLink to="/bookings">
                <SidebarIconWrapper><CalendarSvg /></SidebarIconWrapper>
                <h3>Bookings</h3>
            </SidebarNavLink>
            <SidebarNavLink to="/users">
                <SidebarIconWrapper><AvatarSvg /></SidebarIconWrapper>
                <h3>Users</h3>
            </SidebarNavLink>
            <SidebarNavLink to="/contact">
                <SidebarIconWrapper><JigsawSvg /></SidebarIconWrapper>
                <h3>Contact</h3>
            </SidebarNavLink>
            <SidebarUserDiv>
                <SidebarUserAvatar />
                <h4>Cat Cattington</h4>
                <SidebarUserEmail>cat@catmail.com</SidebarUserEmail>
                <SidebarUserButton onClick={props.logOut}>Log out</SidebarUserButton>
            </SidebarUserDiv>
            <SidebarBylineDiv>
                <SidebarBylineBlack>Miranda Dashboard Software</SidebarBylineBlack>
                <SidebarBylineGrey>All rights reserved, 2022</SidebarBylineGrey>
                <SidebarBylineGreyLast>Made by Andres F. Pelaez with love!</SidebarBylineGreyLast>
            </SidebarBylineDiv>
        </SidebarDiv>
    );
}