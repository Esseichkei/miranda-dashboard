import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const PaginationDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0;
`;
export const PaginationRightDiv = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
`;
export const PaginationButton = styled(Link)`
    color: ${props => props.active === 'true' ? "#135846": "#C5C5C5"};
    border: 1px solid ${props => props.active === 'true' ? "#135846": "#C5C5C5"};
    cursor: ${props => props.active === 'true' ? "pointer": "default"};
    border-radius: 12px;
    padding: 16px 28px 14px;
    background-color: #FFFFFF;
    text-decoration: none;
    font-size: 16px;
`;
export const PaginationNumberDiv = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    border-radius: 12px;
    background-color: #F5F5F5;
    margin: 10px;
`;
export const PaginationNumber = styled(NavLink)`
    color: #393939;
    font-size: 16px;
    text-decoration: none;
    padding: 16px 24px 14px;
    border-radius: 12px;
    &.active {
        cursor: default;
        color: #FFFFFF;
        background-color: #135846;
    }
`;