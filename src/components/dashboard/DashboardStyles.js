import styled from "styled-components";

export const DashboardMain = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 125px 510px 125px 240px 430px;
    gap: 40px;
    width: 100%;
`;
export const DashboardSmallWidgetDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 12px;
    background-color: #FFFFFF;
    padding: 30px;
    box-shadow: ${props => props.active === true ? "0px 16px 30px #00000014" : "0px 4px 4px #00000005"};
`;
export const DashboardSmallWidgetIconDiv = styled.div`
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
export const DashboardSmallWidgetTextBig = styled.div`
    color: #393939;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 5px;
`;
export const DashboardSmallWidgetTextSmall = styled.div`
    color: #787878;
    font-size: 14px;
    font-weight: 300;
`;

export const DashboardCalendarWidgetDiv = styled.div`
    border-radius: 20px;
    padding 20px;
    background-color: #330000;
    grid-column: 1 / span 2;
    grid-row: 2/ span 3;
    box-shadow: 0px 4px 4px #00000005;
    display: flex;
    flex-direction: column;
`;
export const DashboardCalendarDaysDiv = styled.div`
    height: 50%;
    background-color: #FFFFFF;
    h2 {
        display: inline;
        padding: 0 5px;
    }
    .fc-button {
        vertical-align: top;
    }
    .fc-daygrid-day-events {
        display: none;
        min-height: 0;
        background-color: #FF0000;
    }
`;
export const DashboardCalendarListDiv = styled.div`
    height: 50%;
    border-top: 1px solid #EBEBEB;
`;

export const DashboardGraphWidgetDiv = styled.div`
    border-radius: 20px;
    background-color: #003300;
    grid-column: 3 / span 2;
    grid-row: 2 / span 1;
    box-shadow: 0px 4px 4px #00000005;
`;
export const DashboardSliderDiv = styled.div`
    border-radius: 20px;
    background-color: #135846;
    color: #FFFFFF;
    box-shadow: 0px 4px 4px #00000005;
`;
export const DashboardAnnualDiv = styled.div`
    grid-column: 3 / span 2;
    grid-row: 4 / span 1;
    border-radius: 20px;
    background-color: #123456;
    box-shadow: 0px 4px 4px #00000005;
`;
export const DashboardReviewDiv = styled.div`
    grid-row: 5 / span 1;
    grid-column: 1 / span 4;
    border-radius: 20px;
    background-color: #654321;
    box-shadow: 0px 4px 4px #00000005;
`;