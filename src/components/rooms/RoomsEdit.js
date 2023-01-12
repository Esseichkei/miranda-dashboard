import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRoom, updateRoom } from "./RoomsSlice";
import { ModalBackground, ModalButton, ModalDiv, ModalMainTitle, ModalRow, ModalRowItemGrow, ModalSelect, ModalTextarea, ModalTextField, ModalTitle } from "./RoomsStyles";
import { roomOffer, roomTypes } from "./SingleRoom";

export function RoomsEdit(props) {
    const [object, setObject] = useState(props.room || {
        id: 0,
        type: 0,
        offer: 0,
        price: 0,
        discount: 0,
        description: "",
        amenities: "",
        cancellation: "",
        photos: ""
    });
    const dispatch = useDispatch();
    const changeId = (ev) => {
        setObject({...object, id: ev.target.value});
    }
    const changeType = (ev) => {
        setObject({...object, type: ev.target.value});
    }
    const changeOffer = (ev) => {
        setObject({...object, offer: ev.target.value});
    }
    const changePrice = (ev) => {
        setObject({...object, price: ev.target.value});
    }
    const changeDiscount = (ev) => {
        setObject({...object, discount: ev.target.value});
    }
    const changeDescription = (ev) => {
        setObject({...object, description: ev.target.value});
    }
    const changeAmenities = (ev) => {
        setObject({...object, amenities: ev.target.value});
    }
    const changeCancellation = (ev) => {
        setObject({...object, cancellation: ev.target.value});
    }
    const changePhotos = (ev) => {
        setObject({...object, photos: ev.target.value});
    }
    const tryLoggingData = async () => {
        if (props.operationInProgress)
            return; // ignore click if previous operation isn't over
        if (props.operation === 'update') {
            dispatch(updateRoom(object));
        } else if (props.operation === 'create') {
            dispatch(createRoom(object));
        }
    }
    const closeModal = (ev) => {
        if (props.operationInProgress)
            return; // if the submit operation isn't over, don't allow user to close modal
        if (ev.target === ev.currentTarget)
            props.setEdit(false);
    }
    return (
        <ModalBackground onClick={closeModal}>
            <ModalDiv>
                <ModalMainTitle>
                    Room Info
                </ModalMainTitle>
                <ModalRow>
                    <div>
                        <ModalTitle>
                            ID
                        </ModalTitle>
                        <ModalTextField type="number" value={object.id} onChange={changeId}/>
                    </div>
                    <div>
                        <ModalTitle>
                            Type
                        </ModalTitle>
                        <ModalSelect value={object.type} onChange={changeType}>
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
                        <ModalSelect value={object.offer} onChange={changeOffer}>
                            <option value="0">{roomOffer[0]}</option>
                            <option value="1">{roomOffer[1]}</option>
                        </ModalSelect>
                    </div>
                </ModalRow>
                <ModalRow>
                    <div>
                        <ModalTitle>
                            Price ($)
                        </ModalTitle>
                        <ModalTextField type="number" value={object.price} onChange={changePrice}/>
                    </div>
                    <div>
                        <ModalTitle>
                            Discount
                        </ModalTitle>
                        <ModalTextField type="range" value={object.discount} onChange={changeDiscount}/>
                        <span>{object.discount}%</span>
                    </div>
                </ModalRow>
                <ModalTitle>
                    Description
                </ModalTitle>
                <ModalTextarea value={object.description} onChange={changeDescription}/>
                <ModalRow>
                    <ModalRowItemGrow>
                        <ModalTitle>
                            Amenities
                        </ModalTitle>
                        <ModalTextarea value={object.amenities} onChange={changeAmenities}/>
                    </ModalRowItemGrow>
                    <ModalRowItemGrow>
                        <ModalTitle>
                            Cancellation
                        </ModalTitle>
                        <ModalTextarea value={object.cancellation} onChange={changeCancellation}/>
                    </ModalRowItemGrow>
                </ModalRow>
                <ModalTitle>
                    Photos (input space-separated 3 URL's)
                </ModalTitle>
                <ModalTextarea value={object.photos} onChange={changePhotos}/>
                <ModalRow>
                    <ModalButton onClick={tryLoggingData}>Input Data</ModalButton>
                    <ModalButton onClick={closeModal}>Cancel</ModalButton>
                </ModalRow>
            </ModalDiv>
        </ModalBackground>
    );
}