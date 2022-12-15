import { DashboardGraphAbove, DashboardGraphGraphDiv, DashboardGraphTitle, DashboardGraphUpperButton, DashboardGraphUpperRow, DashboardGraphWidgetDiv } from "./DashboardStyles";

export function DashboardGraphWidget(props) {
    return (
        <DashboardGraphWidgetDiv>
            <DashboardGraphAbove>
                <DashboardGraphTitle>
                    Reservation Stats
                </DashboardGraphTitle>
                <DashboardGraphUpperRow>
                    <DashboardGraphUpperButton>
                        Daily
                    </DashboardGraphUpperButton>
                    <DashboardGraphUpperButton>
                        Weekly
                    </DashboardGraphUpperButton>
                    <DashboardGraphUpperButton active="true">
                        Monthly
                    </DashboardGraphUpperButton>
                </DashboardGraphUpperRow>
                <DashboardGraphGraphDiv />
            </DashboardGraphAbove>
        </DashboardGraphWidgetDiv>
    );
}