import styled from "styled-components";

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
    height: 120px;
    background-color: #556655;
    transition: padding-left 0.3s ease-out;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: ${props => props.sidebarShow === true ? "365px" : "20px"};
`;
export const SidebarDiv = styled.div`
    position: fixed;
    height: 100vh;
    top: 0;
    transition: left 0.3s ease-out;
    padding: 20px;
    left: ${props => props.sidebarShow === true ? "0" : "-345px"};
    width: 345px;
    background-color: #665555;
`;