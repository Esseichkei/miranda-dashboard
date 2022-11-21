import styled from "styled-components";
import SidebarToggleImg from "../../img/hamburger-menu-icon.svg"
import MagnifyingGlassImg from "../../img/magnifier-glass-icon.svg"
import HeartImg from "../../img/heart-thin-icon.svg";
import EnvelopeImg from "../../img/email-icon.svg";
import BellImg from "../../img/notification-bell-icon.svg";
import MessageImg from "../../img/message-icon.svg";
import HotelImg from "../../img/residential-apartments-icon.svg";
import { NavLink } from "react-router-dom";
// import CalendarImg from "../../img/schedule-calendar-icon.svg";
// import AvatarImg from "../../img/male-icon.svg";
// import JigsawImg from "../../img/extension-icon.svg";

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

export const SidebarDiv = styled.div`
    position: fixed;
    height: 100vh;
    top: 0;
    transition: left 0.3s ease-out;
    padding: 20px 0;
    left: ${props => props.sidebarShow === true ? "0" : "-345px"};
    width: 345px;
    background-color: #FFFFFF;
    box-shadow: 13px 3px 40px #00000005;
`;
export const SidebarTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0 80px;
`;
export const SidebarTitleIcon = styled.div`
    background-image: url(${HotelImg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 60px;
    height: 52px;
    margin-right: 20px;
`;
export const SidebarNavLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 100px;
    margin: 40px 0;
    border-radius: 5px;
    border-left: 5px solid transparent;
    transition: border-left-color 0.5s, color 0.5s, background-color 0.5s;
    color: #111111;
    background-color: #FFFFFF;
    &:hover {
        background-color: #EEEEEE;
    }
    &.active {
        border-left-color: #44AABB;
        color: #44AABB;
    }
`;
export const SidebarIconWrapper = styled.div`
svg {
    width: 25px;
    height: 25px;
    margin-right: 20px;
    transtion: width 0.5 ease-in-out, height 0.5 ease-in-out;
    & path {
        stroke: #111111;
        fill: #111111;
        transition: stroke 0.5s, fill 0.5s;
    }
}
.active & {
    svg {
        width: 30px;
        height: 30px;
        & path {
            stroke: #44AABB;
            fill: #44AABB;
        }
    }
}
`;
export const SidebarUserDiv = styled.div`
    width: 233px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 56px 40px;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
`;
export const SidebarUserAvatar = styled.div`
    width: 70px;
    height: 70px;
    margin: -35px 0 15px;
    border-radius: 8px;
    background-color: #C5C5C5;
`;
export const SidebarUserEmail = styled.p`
    color: #B2B2B2;
    font-size: 12px;
    margin: 12px 0;
`;
export const SidebarUserButton = styled.button`
    background-color: #EBF1EF;
    border-radius: 8px;
    border: 0px none transparent;
    text-align: center;
    color: #135846;
    width: 158px;
    height: 47px;
    padding: 14px 0;
    margin: 16px 0;
    font-size: 14px;
    font-weight: 600;
`;
export const SidebarBylineDiv = styled.div`
    margin: 20px 20px 20px 56px;
`;
export const SidebarBylineGrey = styled.p`
    color: #799283;
    font-size: 14px;
`;
export const SidebarBylineBlack = styled.p`
    color: #212121;
    font-size: 16px;
    margin: 10px 0;
`;
export const SidebarBylineGreyLast = styled(SidebarBylineGrey)`
    margin-top: 30px;
`;