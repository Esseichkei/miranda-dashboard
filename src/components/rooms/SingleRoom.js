import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { AvatarDiv, AvatarDivLeft, AvatarPicture,
    ItemDetails, ItemDetailsButton, ItemDetailsButtonCluster,
    ItemDetailsButtonLabel, ItemDetailsButtonLabelled,
    ItemDotsDiv, ItemDot, ItemSubtitle, ItemTitle,
    LeftSideDiv, RigthSideDiv, SectionDiv,
    SingleItemFirstDiv, DatesDiv, Separator,
    InfoDiv, ClusterDiv, DateItem, DateItemTitle, DateItemText, InfoDivRow, InfoDivRowItem, InfoItemTitle, InfoItemText, InfoItemTextSmall, InfoMainText } from "./RoomsStyles";
import { ReactComponent as PhoneSvg } from "../../img/phone-call-icon.svg";
import { ReactComponent as ConversationSvg } from "../../img/speech-bubble-icon.svg";

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
                            <AvatarPicture />
                            <ItemDetails>
                                <ItemTitle>
                                    Item Title
                                </ItemTitle>
                                <ItemSubtitle>
                                    ID: 12345678
                                </ItemSubtitle>
                                <ItemDetailsButtonCluster>
                                    <ItemDetailsButton>
                                        <PhoneSvg />
                                    </ItemDetailsButton>
                                    <ItemDetailsButtonLabelled>
                                        <ConversationSvg />
                                        <ItemDetailsButtonLabel>
                                            Send Message
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
                                Check In
                            </DateItemTitle>
                            <DateItemText>
                                October 30th, 2020 | 09:11 AM
                            </DateItemText>
                        </DateItem>
                        <DateItem>
                            <DateItemTitle>
                                Check Out
                            </DateItemTitle>
                            <DateItemText>
                                November 2nd, 2020
                            </DateItemText>
                        </DateItem>
                    </DatesDiv>
                    <Separator />
                    <InfoDiv>
                        <InfoDivRow>
                            <InfoDivRowItem>
                                <InfoItemTitle>
                                    Room Info
                                </InfoItemTitle>
                                <InfoItemText>
                                    Deluxe Z - 002424
                                </InfoItemText>
                            </InfoDivRowItem>
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
                        </InfoDivRow>
                        <InfoMainText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </InfoMainText>
                        <InfoItemTitle>
                            Facilities
                        </InfoItemTitle>
                        
                    </InfoDiv>
                    <ClusterDiv>

                    </ClusterDiv>
                </LeftSideDiv>
                <RigthSideDiv>nah, you!</RigthSideDiv>
            </SingleItemFirstDiv>
            <SectionDiv>
                <p>whoa nelly</p>
            </SectionDiv>
        </div>
    );
}