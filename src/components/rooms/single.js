import { useParams } from "react-router-dom";

export function RoomsSingle (props) {
    const params = useParams();
    return (<h1>Room #{params.id}</h1>)
}