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

export function SingleRoom (props) {
    const params = useParams();
    const setTitle = useOutletContext();
    useEffect(() => {
        setTitle(`Room #${params.id}`);
    }, [params.id, setTitle]);
    return (
        <div>
            <SingleItemFirstDiv>
                <LeftSideDiv>
                    <AvatarDiv>
                        <AvatarDivLeft>
                            <ItemDetails>
                                <ItemTitle>
                                    Room Type
                                </ItemTitle>
                                <ItemSubtitle>
                                    ID: 12345678
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
                                Available
                            </DateItemText>
                        </DateItem>
                        <DateItem>
                            <DateItemTitle>
                                Cancellation
                            </DateItemTitle>
                            <DateItemText>
                                One week's notice
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
                                    $145
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
                                    10
                                    <InfoItemTextSmall>
                                        %
                                    </InfoItemTextSmall>
                                </InfoItemText>
                            </InfoDivRowItem>
                        </InfoDivRow>
                        <InfoMainText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </InfoMainText>
                    </InfoDiv>
                    <ClusterDiv>
                        <InfoItemTitle>
                            Facilities
                        </InfoItemTitle>
                        <InfoMainText>
                            Some things surely.
                        </InfoMainText>
                    </ClusterDiv>
                </LeftSideDiv>
                <RigthSideDiv>nah, you!</RigthSideDiv>
            </SingleItemFirstDiv>
        </div>
    );
}