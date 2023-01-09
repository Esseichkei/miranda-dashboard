import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { AvatarDiv, AvatarDivLeft, AvatarPicture, ItemDetails, ItemDetailsButton, ItemDetailsButtonCluster, ItemDetailsButtonLabel, ItemDetailsButtonLabelled, ItemSubtitle, ItemTitle, LeftSideDiv, RigthSideDiv, SectionDiv, SingleItemFirstDiv } from "./RoomsStyles";
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
                        
                    </AvatarDiv>
                </LeftSideDiv>
                <RigthSideDiv>nah, you!</RigthSideDiv>
            </SingleItemFirstDiv>
            <SectionDiv>
                <p>whoa nelly</p>
            </SectionDiv>
        </div>
    );
}