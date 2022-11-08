import { useParams } from "react-router-dom";

export function UsersSingle (props) {
    const params = useParams();
    return (<h1>User #{params.id}</h1>)
}