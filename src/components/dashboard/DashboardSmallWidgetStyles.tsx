import styled from "styled-components";

export const DashboardSmallWidgetDiv = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 12px;
    background-color: #FFFFFF;
    padding: 30px;
    box-shadow: ${props => props.active === true ? "0px 16px 30px #00000014" : "0px 4px 4px #00000005"};
`;
export const DashboardSmallWidgetIconDiv = styled.div<{ active?: boolean }>`
    width: 65px;
    height: 65px;
    border-radius: 8px;
    flex-shrink: 0;
    background-color: ${props => props.active === true ? "#E23428" : "#FFEDEC"};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    svg {
        width: 30px;
        height: 30px;
        & path {
            stroke: ${props => props.active === true ? "#FFFFFF" : "#E23428"};
            fill: ${props => props.active === true ? "#FFFFFF" : "#E23428"};
            transition: stroke 0.5s, fill 0.5s;
        }
    }
`;