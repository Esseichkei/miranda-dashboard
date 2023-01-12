import { useState } from "react";
import { ModalBackground, ModalButton, ModalDiv, ModalMainTitle, ModalRow, ModalRowItemGrow, ModalSelect, ModalTextarea, ModalTextField, ModalTitle } from "./RoomsStyles";
import { roomOffer, roomTypes } from "./SingleRoom";

export function RoomsEdit(props) {
    const [object, setObject] = useState({
        id: null,
        type: null,
        offer: null,
        price: null,
        discount: null,
        description: null,
        amenities: null,
        cancellation: null,
        photos: null
    });
    return (
        <ModalBackground>
            <ModalDiv>
                <ModalMainTitle>
                    Room Info
                </ModalMainTitle>
                <ModalRow>
                    <div>
                        <ModalTitle>
                            ID
                        </ModalTitle>
                        <ModalTextField type="number"/>
                    </div>
                    <div>
                        <ModalTitle>
                            Type
                        </ModalTitle>
                        <ModalSelect>
                            <option value="0">{roomTypes[0]}</option>
                            <option value="1">{roomTypes[1]}</option>
                            <option value="2">{roomTypes[2]}</option>
                            <option value="3">{roomTypes[3]}</option>
                            <option value="4">{roomTypes[4]}</option>
                        </ModalSelect>
                    </div>
                    <div>
                        <ModalTitle>
                            Offer
                        </ModalTitle>
                        <ModalSelect>
                            <option value="0">{roomOffer[0]}</option>
                            <option value="1">{roomOffer[1]}</option>
                        </ModalSelect>
                    </div>
                </ModalRow>
                <ModalRow>
                    <div>
                        <ModalTitle>
                            Price
                        </ModalTitle>
                        <ModalTextField type="number"/>
                    </div>
                    <div>
                        <ModalTitle>
                            Discount
                        </ModalTitle>
                        <ModalTextField type="range"/>
                        <span>Value</span>
                    </div>
                </ModalRow>
                <ModalTitle>
                    Description
                </ModalTitle>
                <ModalTextarea/>
                <ModalRow>
                    <ModalRowItemGrow>
                        <ModalTitle>
                            Amenities
                        </ModalTitle>
                        <ModalTextarea/>
                    </ModalRowItemGrow>
                    <ModalRowItemGrow>
                        <ModalTitle>
                            Cancellation
                        </ModalTitle>
                        <ModalTextarea/>
                    </ModalRowItemGrow>
                </ModalRow>
                <ModalTitle>
                    Photos (input space-separated 3 URL's)
                </ModalTitle>
                <ModalTextarea/>
                <ModalRow>
                    <ModalButton>Input Data</ModalButton>
                    <ModalButton>Cancel</ModalButton>
                </ModalRow>
            </ModalDiv>
        </ModalBackground>
    );
}