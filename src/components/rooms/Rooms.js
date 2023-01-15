import { TopRowDiv, TopRowTab, TopRowTabDiv, TopRowButton,
    MainTable, MainTableRow, MainTableHead, MainSection} from "./RoomsStyles";
import { useState, useEffect} from "react";
import { RoomsListItem } from "./RoomsListItem";
import { useDispatch, useSelector } from "react-redux";
import { selectRooms, fetchRooms } from "./RoomsSlice";
import { useParams, useOutletContext } from "react-router-dom";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { RoomsEdit } from "./RoomsEdit";
import { Pagination } from "../pagination/Pagination";

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

    const { page } = useParams();
    const activePage = page === undefined ? 1 : Number(page);

    const [modal, setModal] = useState(false);
    useEffect(() => {
        if (rooms.initialized !== true) 
            dispatch(fetchRooms());
    }, [rooms.initialized, dispatch])
    useEffect(() => {
        if (rooms.fulfilled) {
            setModal(false);
        }
    }, [rooms.fulfilled])
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
                                {rooms.items.length === 0 ?
                                <RoomsListItem selected={false} loaded={rooms.fulfilled} room={false}/> :
                                rooms.items.slice().sort((a, b) => a.id - b.id)
                                    .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
                                    .map((item, id) => <RoomsListItem selected={false}
                                    loaded={rooms.fulfilled} room={item} key={id}/> )}
                            </DndProvider>
                        </tbody>
                    </MainTable>
                </div>
                <Pagination page={page} baseURL={BASE_URL} pagesShown={PAGES_SHOWN}
                    itemsPerPage={ITEMS_PER_PAGE} itemLength={rooms.items.length}/>
            </MainSection>);
}