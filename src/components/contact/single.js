import { useParams } from "react-router-dom";

export function ContactSingle (props) {
    const params = useParams();
    return (<h1>Contact #{params.id}</h1>)
}