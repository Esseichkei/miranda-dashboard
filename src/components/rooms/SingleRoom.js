import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { AvatarDiv, AvatarDivLeft,
    ItemDetails, ItemDetailsButton, ItemDetailsButtonCluster,
    ItemDetailsButtonLabel, ItemDetailsButtonLabelled,
    ItemDotsDiv, ItemDot, ItemSubtitle, ItemTitle,
    LeftSideDiv, RigthSideDiv,
    SingleItemFirstDiv, DatesDiv, Separator,
    InfoDiv, ClusterDiv, DateItem, DateItemTitle, DateItemText, InfoDivRow, InfoDivRowItem, InfoItemTitle, InfoItemText, InfoItemTextSmall, InfoMainText } from "./RoomsStyles";
import { ReactComponent as DeleteSvg } from "../../img/delete-icon.svg";
import { ReactComponent as EditSvg } from "../../img/edit-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomById, selectRooms } from "./RoomsSlice";

const roomTypes = [
    'Single Bed Room',
    'Double Bed Room',
    'Honey Moon Suite',
    'Family Room',
    'Presidential Suite'
]
const offer = [
    'Unavailable',
    'Available'
]

export function SingleRoom (props) {
    const dispatch = useDispatch();
    const params = useParams();
    const setTitle = useOutletContext();
    const rooms = useSelector(selectRooms);
    useEffect(() => {
        setTitle(`Room #${params.id}`);
    }, [params.id, setTitle]);
    useEffect(() => {
        if (rooms.singleItem === null || rooms.singleItem === undefined) {
            dispatch(fetchRoomById(params.id));
        }
    }, [rooms, params.id, dispatch]);
    return (
        <div>
            <SingleItemFirstDiv>
                <LeftSideDiv>
                    <AvatarDiv>
                        <AvatarDivLeft>
                            <ItemDetails>
                                <ItemTitle>
                                    {rooms.singleItem ? roomTypes[rooms.singleItem.type] : 'Loading Room'}
                                </ItemTitle>
                                <ItemSubtitle>
                                    ID: {rooms.singleItem ? rooms.singleItem.id : '12345678'}
                                </ItemSubtitle>
                                <ItemDetailsButtonCluster>
                                    <ItemDetailsButton>
                                        <DeleteSvg />
                                    </ItemDetailsButton>
                                    <ItemDetailsButtonLabelled>
                                        <EditSvg />
                                        <ItemDetailsButtonLabel>
                                            Edit Fields
                                        </ItemDetailsButtonLabel>
                                    </ItemDetailsButtonLabelled>
                                </ItemDetailsButtonCluster>
                            </ItemDetails>
                        </AvatarDivLeft>
                        <ItemDotsDiv>
                            <ItemDot />
                            <ItemDot />
                            <ItemDot />
                        </ItemDotsDiv>
                    </AvatarDiv>
                    <DatesDiv>
                        <DateItem>
                            <DateItemTitle>
                                State
                            </DateItemTitle>
                            <DateItemText>
                                {rooms.singleItem ? offer[rooms.singleItem.offer] : 'Not loaded'}
                            </DateItemText>
                        </DateItem>
                        <DateItem>
                            <DateItemTitle>
                                Cancellation
                            </DateItemTitle>
                            <DateItemText>
                                {rooms.singleItem ? rooms.singleItem.cancellation : 'Not loaded'}
                            </DateItemText>
                        </DateItem>
                    </DatesDiv>
                    <Separator />
                    <InfoDiv>
                        <InfoDivRow>
                            <InfoDivRowItem>
                                <InfoItemTitle>
                                    Price
                                </InfoItemTitle>
                                <InfoItemText>
                                    ${rooms.singleItem ? rooms.singleItem.price : '--'}
                                    <InfoItemTextSmall>
                                        /night
                                    </InfoItemTextSmall>
                                </InfoItemText>
                            </InfoDivRowItem>
                            <InfoDivRowItem>
                                <InfoItemTitle>
                                    Discount
                                </InfoItemTitle>
                                <InfoItemText>
                                    {rooms.singleItem ? rooms.singleItem.discount : '--'}
                                    <InfoItemTextSmall>
                                        %
                                    </InfoItemTextSmall>
                                </InfoItemText>
                            </InfoDivRowItem>
                        </InfoDivRow>
                        <InfoMainText>
                            {rooms.singleItem ? rooms.singleItem.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                        </InfoMainText>
                    </InfoDiv>
                    <ClusterDiv>
                        <InfoItemTitle>
                            Facilities
                        </InfoItemTitle>
                        <InfoMainText>
                            {rooms.singleItem ? rooms.singleItem.facilities : 'Not applicable'}
                        </InfoMainText>
                    </ClusterDiv>
                </LeftSideDiv>
                <RigthSideDiv>nah, you!</RigthSideDiv>
            </SingleItemFirstDiv>
        </div>
    );
}