import { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { PaginationDiv, PaginationRightDiv, PaginationButton,
    PaginationNumberDiv, PaginationNumber } from "./PaginationStyles";

export function Pagination(props) {
    const activePage = props.page === undefined ? 1 : Number(props.page);
    const totalPages = Math.max(Math.ceil(props.itemLength / props.itemsPerPage), 1);
    const pagesStartingFrom = Math.max(1, activePage - Math.floor(props.pagesShown/2));
    const pagesUpTo = Math.min(totalPages, activePage + Math.floor(props.pagesShown/2));
    //pagination logic
    const renderedPages = useMemo(() => {
        let arrayOfPages = [];
        for (let i = pagesStartingFrom; i <= pagesUpTo; i++) {
            arrayOfPages.push(i);
        };
        return arrayOfPages;
    }, [pagesStartingFrom, pagesUpTo]);
    
    //redirect if bad page param
    if (activePage <= 0 || activePage > totalPages) {
        return <Navigate to={props.baseURL} replace={false}/>;
    };
    return (
        <PaginationDiv>
            <p>Showing {props.itemsPerPage} out of {props.itemLength} items</p>
            <PaginationRightDiv>
                <PaginationButton to={props.baseURL + (activePage > 2 ? `/${activePage - 1}` : "")} active={activePage !== 1 ? "true" : "false"}>Prev</PaginationButton>
                <PaginationNumberDiv>
                    {renderedPages.map((e, i) => <PaginationNumber to={props.baseURL + (e !== 1 ? `/${e}` : "")} key={i} end>{e}</PaginationNumber>)}
                </PaginationNumberDiv>
                <PaginationButton to={props.baseURL + (activePage === 1 && activePage === totalPages ? "" : `/${activePage !== totalPages ? activePage + 1 : activePage}`)} active={activePage !== totalPages ? "true" : "false"}>Next</PaginationButton>
            </PaginationRightDiv>
        </PaginationDiv>
    );
}