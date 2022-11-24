import { HeaderDiv, HeaderLeftDiv, MainDiv, SidebarDiv, SidebarToggle, HeaderRightDiv, HeaderSearchField, HeartDiv, EnvelopeDiv, BellDiv, MessaageDiv, UserDiv, SidebarTitle, SidebarTitleIcon, SidebarNavLink, SidebarIconWrapper, SidebarUserDiv, SidebarUserAvatar, SidebarUserEmail, SidebarUserButton, SidebarBylineDiv, SidebarBylineBlack, SidebarBylineGrey, SidebarBylineGreyLast, TopRowDiv, TopRowTab, TopRowTabDiv, TopRowButton, MainTable, MainTableRow, MainTableHead, MainSection, PaginationDiv, PaginationButton, PaginationNumberDiv, PaginationNumber, PaginationRightDiv } from "./RoomsStyles";
import { useState } from "react";
import { ReactComponent as GridSvg } from "../../img/grid-interface-layout-icon.svg";
import { ReactComponent as KeySvg } from "../../img/key-line-icon.svg";
import { ReactComponent as CalendarSvg} from "../../img/schedule-calendar-icon.svg";
import { ReactComponent as AvatarSvg} from "../../img/male-icon.svg";
import { ReactComponent as JigsawSvg} from "../../img/extension-icon.svg";
import { RoomsListItem } from "./RoomsListItem";
import { useDispatch, useSelector } from "react-redux";
import { selectRooms, fetchRooms } from "./RoomsSlice";
import { useParams } from "react-router-dom";

const PAGES_SHOWN = 5;
const ITEMS_PER_PAGE = 5;
const BASE_URL = '/rooms';

export function Rooms(props) {
    // itemList definitions
    const rooms = useSelector(selectRooms);
    const dispatch = useDispatch();
    let renderedRooms;
    // pagination definitions
    const { page } = useParams();
    const total_pages = Math.ceil(rooms.rooms.length / ITEMS_PER_PAGE);
    const activePage = page !== undefined ? Number(page) : 1;
    const pagesStartingFrom = Math.max(1, activePage - Math.floor(PAGES_SHOWN/2));
    const pagesUpTo = Math.min(total_pages, pagesStartingFrom + PAGES_SHOWN - 1);
    
    let renderedPages;
    let prevButton;
    let nextButton;
    // sidebar definitions
    const [sidebarShow, setSidebarShow] = useState(true);
    const toggleSidebar = () => {
        setSidebarShow(!sidebarShow);
    };
    // LOGIC
    // itemList logic
    if (rooms.initialized !== true) {
        dispatch(fetchRooms());
    }
    if (rooms.fulfilled === true) {
        renderedRooms = rooms.rooms.slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE).map((item, id) => {
            return <RoomsListItem selected={false} loaded={rooms.fulfilled} room={item} key={id}/>;
        });
    } else {
        renderedRooms = <RoomsListItem selected={false} loaded={rooms.fulfilled} room={false}/>;
    }
    // pagination logic

    renderedPages = [];
    for (let i = pagesStartingFrom; i <= pagesUpTo; i++) {
        renderedPages.push(<PaginationNumber to={BASE_URL + (i !== 1 ? `/${i}` : "")} key={i} end>{i}</PaginationNumber>);
    }
    // console.log(typeof activePage) // DEBUG
    // console.log(activePage !== 2 ? `/${activePage - 1}` : "") // DEBUG
    prevButton = activePage !== 1 ? <PaginationButton to={BASE_URL + (activePage !== 2 ? `/${activePage - 1}` : "")}>Prev</PaginationButton>: null;
    nextButton = activePage !== total_pages ? <PaginationButton to={BASE_URL + `/${activePage + 1}`}>Prev</PaginationButton>: null;

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
                    <SidebarUserButton>Log out</SidebarUserButton>
                </SidebarUserDiv>
                <SidebarBylineDiv>
                    <SidebarBylineBlack>Miranda Dashboard Software</SidebarBylineBlack>
                    <SidebarBylineGrey>All rights reserved, 2022</SidebarBylineGrey>
                    <SidebarBylineGreyLast>Made by Andres F. Pelaez with love!</SidebarBylineGreyLast>
                </SidebarBylineDiv>
            </SidebarDiv>
            <MainSection>
                <div>
                    <TopRowDiv>
                        <TopRowTabDiv>
                            <TopRowTab active={true}>
                                All Rooms
                            </TopRowTab>
                            <TopRowTab>
                                Occupied Rooms
                            </TopRowTab>
                            <TopRowTab>
                                Available Rooms
                            </TopRowTab>
                        </TopRowTabDiv>
                        <div>
                            <TopRowButton active={true}>+ New Room</TopRowButton>
                            <TopRowButton>Newest</TopRowButton>
                        </div>
                    </TopRowDiv>
                    <MainTable>
                        <thead>
                            <MainTableRow>
                                <MainTableHead></MainTableHead>
                                <MainTableHead>
                                    Room Name
                                </MainTableHead>
                                <MainTableHead>
                                    Bed Type
                                </MainTableHead>
                                <MainTableHead>
                                    Room Floor
                                </MainTableHead>
                                <MainTableHead>
                                    Facilities
                                </MainTableHead>
                                <MainTableHead>
                                    Rate
                                </MainTableHead>
                                <MainTableHead>
                                    Status
                                </MainTableHead>
                                <MainTableHead></MainTableHead>
                            </MainTableRow>
                        </thead>
                        <tbody>
                            {renderedRooms}
                        </tbody>
                    </MainTable>
                </div>
                <PaginationDiv>
                    <p>Showing {ITEMS_PER_PAGE} of {rooms.rooms.length} items</p>
                    <PaginationRightDiv>
                        {prevButton}
                            <PaginationNumberDiv>
                                {renderedPages}
                            </PaginationNumberDiv>
                        {nextButton}
                    </PaginationRightDiv>
                </PaginationDiv>
            </MainSection>
        </MainDiv>);
}