import { HeaderDiv, HeaderLeftDiv, MainDiv, SidebarDiv, SidebarToggle, HeaderRightDiv, HeaderSearchField, HeartDiv, EnvelopeDiv, BellDiv, MessaageDiv, UserDiv, SidebarTitle, SidebarTitleIcon, SidebarNavLink, SidebarIconWrapper, SidebarUserDiv, SidebarUserAvatar, SidebarUserEmail, SidebarUserButton, SidebarBylineDiv, SidebarBylineBlack, SidebarBylineGrey, SidebarBylineGreyLast, TopRowDiv, TopRowTab, TopRowTabDiv, TopRowButton, MainTable, MainTableRow, MainTableHead } from "./RoomsStyles";
import { useState } from "react";
import { ReactComponent as GridSvg } from "../../img/grid-interface-layout-icon.svg";
import { ReactComponent as KeySvg } from "../../img/key-line-icon.svg";
import { ReactComponent as CalendarSvg} from "../../img/schedule-calendar-icon.svg";
import { ReactComponent as AvatarSvg} from "../../img/male-icon.svg";
import { ReactComponent as JigsawSvg} from "../../img/extension-icon.svg";
import { RoomsListItem } from "./RoomsListItem";
import { useDispatch, useSelector } from "react-redux";
import { selectRooms, fetchRooms } from "./RoomsSlice";

export function Rooms(props) {
    const rooms = useSelector(selectRooms);
    const dispatch = useDispatch();
    const [sidebarShow, setSidebarShow] = useState(true);
    const toggleSidebar = () => {
        setSidebarShow(!sidebarShow);
    };
    if (rooms.initialized !== true) {
        dispatch(fetchRooms());
    }
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
                <SidebarNavLink to="/rooms" end>
                    <SidebarIconWrapper><KeySvg /></SidebarIconWrapper>
                    <h3>Rooms</h3>
                </SidebarNavLink>
                <SidebarNavLink to="/bookings" end>
                    <SidebarIconWrapper><CalendarSvg /></SidebarIconWrapper>
                    <h3>Bookings</h3>
                </SidebarNavLink>
                <SidebarNavLink to="/users" end>
                    <SidebarIconWrapper><AvatarSvg /></SidebarIconWrapper>
                    <h3>Users</h3>
                </SidebarNavLink>
                <SidebarNavLink to="/contact" end>
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
                    <RoomsListItem selected={false} occupied={false} room={false}/>
                </tbody>
            </MainTable>
        </MainDiv>);
}