import { DashboardCalendarListItem, DashboardCalendarListItemDetails, DashboardCalendarListItemLeft, DashboardCalendarListItemPhoto, DashboardCalendarListItemDays, DashboardCalendarListItemAvatar, DashboardCalendarListItemUsername, DashboardCalendarListItemWhen } from "./DashboardStyles"

export function DashboardCalendarItem(props) {
    return (<DashboardCalendarListItem>
        <DashboardCalendarListItemLeft>
            <DashboardCalendarListItemPhoto />
            <div>
                <h4>Queen Bed A-12324</h4>
                <DashboardCalendarListItemDetails>
                    <DashboardCalendarListItemAvatar />
                    <DashboardCalendarListItemUsername>
                        James Sukardi
                    </DashboardCalendarListItemUsername>
                    <DashboardCalendarListItemWhen>
                        12 min ago
                    </DashboardCalendarListItemWhen>
                </DashboardCalendarListItemDetails>
            </div>
        </DashboardCalendarListItemLeft>
        <DashboardCalendarListItemDays>
            11
        </DashboardCalendarListItemDays>
    </DashboardCalendarListItem>);
}