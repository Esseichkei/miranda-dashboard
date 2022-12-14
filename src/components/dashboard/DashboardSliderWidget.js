import { DashboardSliderAbove, DashboardSliderDiv, DashboardSliderNumber, DashboardSliderSection, DashboardSliderText, DashboardSliderTotal } from "./DashboardStyles";

export function DashboardSliderWidget(props) {
    return (<DashboardSliderDiv>
        <DashboardSliderAbove>
            <DashboardSliderText>
                Bookings
            </DashboardSliderText>
            <DashboardSliderNumber>
                165
            </DashboardSliderNumber>
        </DashboardSliderAbove>
        <DashboardSliderTotal>
            <DashboardSliderSection />
        </DashboardSliderTotal>
    </DashboardSliderDiv>);
}