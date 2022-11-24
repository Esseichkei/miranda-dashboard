import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";

export function SingleRoom (props) {
    const params = useParams();
    const setTitle = useOutletContext();
    useEffect(() => {
        setTitle(`Room #${params.id}`);
    }, [params.id, setTitle]);
    return (
        <h1>Room #{params.id}</h1>
    );
}