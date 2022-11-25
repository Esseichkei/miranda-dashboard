import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { AvatarPicture, LeftSideDiv, RigthSideDiv, SectionDiv, SingleItemFirstDiv } from "./RoomsStyles";

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
                    <AvatarPicture />
                </LeftSideDiv>
                <RigthSideDiv>nah, you!</RigthSideDiv>
            </SingleItemFirstDiv>
            <SectionDiv>
                <p>whoa nelly</p>
            </SectionDiv>
        </div>
    );
}