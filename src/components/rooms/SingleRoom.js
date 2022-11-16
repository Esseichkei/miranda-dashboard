import { useParams } from "react-router-dom";

export function SingleRoom (props) {
    const params = useParams();
    return (<h1>Room #{params.id}</h1>)
}