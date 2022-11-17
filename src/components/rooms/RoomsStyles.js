import styled from "styled-components";
import SidebarToggleImg from "../../img/hamburger-menu-icon.svg"
import MagnifyingGlassImg from "../../img/magnifier-glass-icon.svg"
import HeartImg from "../../img/heart-thin-icon.svg";
import EnvelopeImg from "../../img/email-icon.svg";
import BellImg from "../../img/notification-bell-icon.svg";
import MessageImg from "../../img/message-icon.svg";
import GridImg from "../../img/grid-interface-layout-icon.svg";
import KeyImg from "../../img/key-line-icon.svg";
import CalendarImg from "../../img/schedule-calendar-icon.svg";
import AvatarImg from "../../img/male-icon.svg";
import JigsawImg from "../../img/extension-icon.svg";

export const MainDiv = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #F8F8F8;
    padding-top: 140px;
    transition: padding-left 0.3s ease-out;
    padding-left: ${props => props.sidebarShow === true ? "365px" : "20px"};
    padding-right: 20px;
    padding-bottom: 20px;
`;
export const HeaderDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-width: ${props => props.sidebarShow === true ? "965px" : "600px"};
    height: 120px;
    background-color: #FFFFFF;
    transition: padding-left 0.3s ease-out, min-width 0.3s ease-out;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: ${props => props.sidebarShow === true ? "365px" : "20px"};
    box-shadow: 0px 3px 10px #00000005;
`;
export const HeaderLeftDiv = styled.div`
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 35%;
    vertical-align: top;
`; //vertical-align: top needed for some stupid inline-block reason
export const SidebarToggle = styled.div`
    display: inline-block;
    min-width: 24px;
    min-height: 24px;
    margin-right: 40px;
    width: 24px;
    height: 24px;
    background-image: url(${SidebarToggleImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
export const HeaderRightDiv = styled.div`
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 65%;
`;
export const HeaderSearchField = styled.input`
    border-radius: 5px;
    padding: 8px;
    background-color: #ECECEC;
    background-image: url(${MagnifyingGlassImg});
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 95% center;
    border: 0px none transparent;
    font-size: 16px;
    margin: 10px;
`;
export const SidebarDiv = styled.div`
    position: fixed;
    height: 100vh;
    top: 0;
    transition: left 0.3s ease-out;
    padding: 20px;
    left: ${props => props.sidebarShow === true ? "0" : "-345px"};
    width: 345px;
    background-color: #FFFFFF;
    box-shadow: 13px 3px 40px #00000005;
`;
export const IconDiv = styled.div`
    margin: 20px;
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    flex-shrink: 0;
`;
export const HeartDiv = styled(IconDiv)`
    background-image: url(${HeartImg});
`;
export const EnvelopeDiv = styled(IconDiv)`
    background-image: url(${EnvelopeImg});
`;
export const BellDiv = styled(IconDiv)`
    background-image: url(${BellImg});
`;
export const MessaageDiv = styled(IconDiv)`
    background-image: url(${MessageImg});
`;
export const UserDiv = styled.div`
    margin: 20px;
    height: 60px;
    width: 60px;
    border-radius: 8px;
    background-color: #AAAAAA;
    flex-shrink: 0;
`;