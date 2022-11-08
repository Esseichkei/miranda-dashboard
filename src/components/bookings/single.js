import { useParams } from "react-router-dom";

export function BookingsSingle (props) {
    const params = useParams();
    return (<h1>Booking #{params.id}</h1>)
}