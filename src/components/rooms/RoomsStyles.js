import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const MainDiv = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #F8F8F8;
    padding-top: 170px;
    transition: padding-left 0.3s ease-out;
    padding-left: ${props => props.sidebarShow === true ? "395px" : "50px"};
    padding-right: 50px;
    padding-bottom: 50px;
`;
export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: space-between;
`;
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
export const TopRowDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;
export const TopRowTabDiv = styled.div`
    display: flex;
`
export const TopRowTab = styled.div`
    padding: 14px 32px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.active === true ? "#135846" : "#6E6E6E" };
    border-bottom-color: ${props => props.active === true ? "#135846" : "#D4D4D4" };
`;
export const TopRowButton = styled.button`
    border: 1px solid #135846;
    margin: 10px;
    font-size: 16px;
    font-weight: 600;
    padding: 13px 50px;
    color: ${props => props.active === true ? "#FFFFFF" : "#135846"};
    background-color: ${props => props.active === true ? "#135846" : "transparent"};
    border-radius: 12px;
`;
export const MainTable = styled.table`
    width: 100%;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    background-color: #FFFFFF;
    border-collapse: separate;
    border-spacing: 0 2px;
`;
export const MainTableRow = styled.tr`
    ${props => props.selected === true ? "box-shadow: 0px 4px 30px #00000014;" : ""}
`;
export const MainTableHead = styled.th`
    padding: 20px 10px;
    font-size: 18px;
    border-bottom: 2px solid #F8F8F8;
`;
export const MainTableData = styled.td`
    padding: 20px 10px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    border-bottom: 1px solid #F8F8F8;
`;
export const TableItemCheck = styled.div`
    display: inline-block;
    vertical-align: baseline;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 2px solid #707070;
    padding: 3px;
`;
export const TableItemCheckPilot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background-color: #707070;
    opacity: ${props => props.selected === true ? "1" : "0"};
`;
export const TableItemImg = styled.div`
    display: inline-block;
    vertical-align: middle;
    width: 150px;
    height: 77px;
    border-radius: 8px;
    background-color: #C5C5C5;
    background-size: cover;
    margin: 0 10px;
`;
export const TableItemStatus = styled.div`
    width: 125px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    border-radius: 12px;
    background-color: ${props => props.occupied === true ? "#E23428" : "#5AD07A"};
`;
export const TableItemThreeDots = styled.div`
    `;
export const TableItemThreeDotsDot = styled.div`
    background-color: #6E6E6E;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin: 4px;
`;

export const SectionDiv = styled.div`
    background-color: #FFFFFF;
    border-radius: 20px;
    margin: 0 0 40px;
`;
export const SingleItemFirstDiv = styled(SectionDiv)`
    display: flex;
`;
export const LeftSideDiv = styled.div`
    height: 100%;
    width: 50%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 40px;
`;
export const AvatarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
export const AvatarDivLeft = styled.div`
    display: flex;
    margin-bottom: 39px;
`;
export const AvatarPicture = styled.div`
    width: 156px;
    height: 156px;
    background-color: #C5C5C5;
    border-radius: 12px;
    margin-right: 39px;
    background-size: cover;
    background-repeat: no-repeat;
`;
export const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;
export const ItemTitle = styled.div`
    font-size: 30px;
    color: #212121;
    margin: 10px 0;
`;
export const ItemSubtitle = styled.div`
    font-size: 14px;
    color: #799283;
    margin: 5px 0;
`
export const ItemDetailsButtonCluster = styled.div`
    margin: 10px 0;
    display: flex;
`;
export const ItemDetailsButton = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 18px;
    border-radius: 12px;
    border: 1px solid #E8F2EF;
    background-color: #FFFFFF;
    color: #135846;
    transition: color 0.4s, border-color 0.4s, background-color 0.4s;
    svg {
        height: 22px;
        width: 22px;
        & path {
            stroke: #135846;
            fill: #135846;
            transition: stroke 0.4s, fill 0.4s;
        }
    }
    &:hover {
        border-color: #135846;
        background-color: #135846;
        color: #FFFFFF;
        svg {
            & path {
                stroke: #FFFFFF;
                fill: #FFFFFF;
            }
        }
    }
`;
export const ItemDetailsButtonLabelled = styled(ItemDetailsButton)`
    margin-left: 16px;
`;
export const ItemDetailsButtonLabel = styled.div`
    margin-left: 20px;
`;
export const RigthSideDiv = styled.div`
    position: relative;
    //height: 100%; WHYYYY
    width: 50%;
    background-color: #00FF66;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 40px;
`;
export const ItemDotsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 12px;
    height: 30px;
    padding: 3px;

`;
export const ItemDot = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #6E6E6E;
`;
export const DatesDiv = styled.div``;
export const DateItem = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 50%;
    padding-right: 10px;
`;
export const DateItemTitle = styled.div`
    font-size: 14px;
    color: #6E6E6E;
`;
export const DateItemText = styled.div`
    color: #212121;
`;
export const Separator = styled.div`
    height: 4px;
    background-color: #C4C4C4;
    margin: 40px 0 40px;
    border-radius: 2px;
`;
export const InfoDiv = styled.div``;
export const InfoDivRow = styled.div`
    margin-bottom: 30px;
`;
export const InfoDivRowItem = styled(DateItem)``;
export const InfoItemTitle = styled(DateItemTitle)``;
export const InfoItemText = styled(DateItemText)`
    font-size: 24px;
`;
export const InfoItemTextSmall = styled.span`
    margin-left: 5px;
    font-size: 14px;
    color: #799283;
`;
export const InfoMainText = styled.div`
    font-size: 14px;
    color: #363636;
    margin: 30px 0;
`;
export const ClusterDiv = styled.div``;

export const ModalBackground = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    z-index: 20;
    background-color: #FFFFFF88;
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`;
export const ModalDiv = styled.div`
    padding: 40px;
    background-color: #CCCCCC;
    border-radius: 12px;
    max-height: 100%;
    margin: 40px;
    max-width: 80%;
    overflow: hidden;
`;
export const ModalMainTitle = styled.div`
    font-size: 30px;
    border-radius: 3px;
    border-bottom: 3px solid #999999;
    margin-bottom: 30px;
`;
export const ModalTitle = styled.div`
    font-size: 20px;
    color: #121212;
    margin: 10px 0;
`;
export const ModalTextField = styled.input.attrs(props => ({
    type: props.type || 'text'
}))`
    border: none;
    background-color: #FFFFFF;
    border-radius: 8px;
    margin: 10px 0;
    padding: 5px;
    width: 200px;
`;
export const ModalSelect = styled.select`
    border: none;
    background-color: #FFFFFF;
    border-radius: 8px;
    margin: 10px 0;
    padding: 5px;
    width: 200px;
`;
export const ModalRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
        margin-right: 30px;
    }
    div:last-child {
        margin-right: 0;
    }
    div span {
        display: inline-block;
        margin-left: 10px;
        width: 40px;
    }
`;
export const ModalTextarea = styled.textarea`
    resize: none;
    border: none;
    background-color: #FFFFFF;
    border-radius: 8px;
    margin: 10px 0;
    padding: 5px;
    width: 100%;
    min-height: 56px;
`;
export const ModalRowItemGrow = styled.div`
    flex-grow: 1;
`;
export const ModalButton = styled.div`
    border-radius: 8px;
    margin-top: 20px;
    padding: 10px;
    border: none;
    transition: background-color 0.5s, color 0.5s;
    background-color: #F3F3F3;
    :hover {
        background-color: #222222;
        color: #FFFFFF;
        cursor: pointer;
    }
`;