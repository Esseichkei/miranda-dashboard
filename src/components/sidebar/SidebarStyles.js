import styled from "styled-components";
import { NavLink } from "react-router-dom";
import HotelImg from "../../img/residential-apartments-icon.svg";

export const SidebarDiv = styled.div`
    z-index: 20;
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
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 20px 0;
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