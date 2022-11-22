import { MainTableData, MainTableRow, TableItemCheck, TableItemCheckPilot, TableItemImg, TableItemStatus } from "./RoomsStyles";
import { useState } from "react";

export function RoomsListItem(props) {
    const [selected, setSelected] = useState(props.selected === true ? true : false);
    const handleCheckClick = () => {
        setSelected(!selected);
    };
    return (
        <MainTableRow>
            <MainTableData>
                <TableItemCheck onClick={handleCheckClick}>
                    <TableItemCheckPilot selected={selected} />
                </TableItemCheck>
            </MainTableData>
            <MainTableData>
                <TableItemImg />
                Oceanview 1
            </MainTableData>
            <MainTableData>
                Double Bed
            </MainTableData>
            <MainTableData>
                Floor A-1
            </MainTableData>
            <MainTableData>
                AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi
            </MainTableData>
            <MainTableData>
                $145 / night
            </MainTableData>
            <MainTableData>
                <TableItemStatus occupied={props.occupied}>
                    {props.occupied === true ? "Booked" : "Available"}
                </TableItemStatus>
            </MainTableData>
            <MainTableData>
                L
            </MainTableData>
        </MainTableRow>
    );
}