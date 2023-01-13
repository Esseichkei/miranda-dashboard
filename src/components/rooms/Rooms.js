import { TopRowDiv, TopRowTab, TopRowTabDiv, TopRowButton, MainTable, MainTableRow, MainTableHead, MainSection, PaginationDiv, PaginationButton, PaginationNumberDiv, PaginationNumber, PaginationRightDiv } from "./RoomsStyles";
import { useState, useEffect, useMemo } from "react";
import { RoomsListItem } from "./RoomsListItem";
import { useDispatch, useSelector } from "react-redux";
import { selectRooms, fetchRooms } from "./RoomsSlice";
import { Navigate, useParams, useOutletContext } from "react-router-dom";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { RoomsEdit } from "./RoomsEdit";

const PAGES_SHOWN = 5;
const ITEMS_PER_PAGE = 10;
const BASE_URL = '/rooms';

export function Rooms(props) {
    // Page setTitle setup
    const setTitle = useOutletContext();
    useEffect(() => {
        setTitle('Rooms');
    }, [setTitle]);
    // itemList definitions
    const rooms = useSelector(selectRooms);
    const dispatch = useDispatch();
    const [renderedRooms, setRenderedRooms] = useState([]);
    // pagination definitions
    const { page } = useParams();
    const activePage = page === undefined ? 1 : Number(page);
    const totalPages = Math.max(Math.ceil(rooms.items.length / ITEMS_PER_PAGE), 1);
    const pagesStartingFrom = Math.max(1, activePage - Math.floor(PAGES_SHOWN/2));
    const pagesUpTo = Math.min(totalPages, activePage + Math.floor(PAGES_SHOWN/2));
    const [modal, setModal] = useState(false);
    // itemList useEffect()
    useEffect(() => {
        if (rooms.initialized !== true) {
            dispatch(fetchRooms());
        }
        if (rooms.fulfilled === true) {
            setRenderedRooms(rooms.items.slice().sort((a, b) => a.id - b.id).slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE).map((item, id) => {
                return <RoomsListItem selected={false} loaded={rooms.fulfilled} room={item} key={id}/>;
            }));
        } else {
            setRenderedRooms(<RoomsListItem selected={false} loaded={rooms.fulfilled} room={false}/>);
        }
    }, [rooms, dispatch, activePage, totalPages]);
    useEffect(() => {
        if (rooms.fulfilled) {
            setModal(false);
        }
    }, [rooms.fulfilled])
    //pagination logic
    const renderedPages = useMemo(() => {
        let arrayOfPages = [];
        for (let i = pagesStartingFrom; i <= pagesUpTo; i++) {
            arrayOfPages.push(i);
        };
        return arrayOfPages;
    }, [pagesStartingFrom, pagesUpTo]);
    
    //redirect if bad page param
    if (activePage <= 0 || activePage > totalPages) {
        return <Navigate to={BASE_URL} replace={false}/>;
    };
    return (<MainSection>
                {modal ? <RoomsEdit setEdit={setModal}
                operationInProgress={!rooms.fulfilled}
                operation="create"/> : null}
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
                            <TopRowButton active={true} onClick={() => setModal(true)}>+ New Room</TopRowButton>
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
                            <DndProvider backend={HTML5Backend}>
                                {renderedRooms}
                            </DndProvider>
                        </tbody>
                    </MainTable>
                </div>
                <PaginationDiv>
                    <p>Showing {ITEMS_PER_PAGE} out of {rooms.items.length} items</p>
                    <PaginationRightDiv>
                        <PaginationButton to={BASE_URL + (activePage > 2 ? `/${activePage - 1}` : "")} active={activePage !== 1 ? "true" : "false"}>Prev</PaginationButton>
                        <PaginationNumberDiv>
                            {renderedPages.map((e, i) => <PaginationNumber to={BASE_URL + (e !== 1 ? `/${e}` : "")} key={i} end>{e}</PaginationNumber>)}
                        </PaginationNumberDiv>
                        <PaginationButton to={BASE_URL + (activePage === 1 && activePage === totalPages ? "" : `/${activePage !== totalPages ? activePage + 1 : activePage}`)} active={activePage !== totalPages ? "true" : "false"}>Next</PaginationButton>
                    </PaginationRightDiv>
                </PaginationDiv>
            </MainSection>);
}