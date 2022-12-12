import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { DashboardAnnualDiv, DashboardCalendarDaysDiv, DashboardCalendarListDiv, DashboardCalendarViewMore, DashboardCalendarWidgetDiv, DashboardGraphWidgetDiv, DashboardMain, DashboardReviewDiv, DashboardSliderDiv } from "./DashboardStyles";
import { ReactComponent as BedSvg } from "../../img/bed-icon.svg";
import { ReactComponent as CalendarSvg } from "../../img/schedule-calendar-icon.svg";
import { ReactComponent as InputSvg } from "../../img/log-in.svg";
import { ReactComponent as OutputSvg } from "../../img/log-out.svg";
import { DashboardSmallWidget } from "./DashboardSmallWidget";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import { DashboardCalendarItem } from "./DashboardCalendarItem";

export function Dashboard (props) {
    const setTitle = useOutletContext();
    useEffect(() => {
        setTitle('Dashboard');
    }, [setTitle]);
    return (
        <DashboardMain>
            <DashboardSmallWidget active={false} number="345" text="New bookings">
                <BedSvg />
            </DashboardSmallWidget>
            <DashboardSmallWidget active={true} number="456" text="Scheduled rooms">
                <CalendarSvg />
            </DashboardSmallWidget>
            <DashboardSmallWidget active={false} number="3467" text="Check ins">
                <InputSvg />
            </DashboardSmallWidget>
            <DashboardSmallWidget active={false} number="1435" text="Check outs">
                <OutputSvg />
            </DashboardSmallWidget>
            <DashboardCalendarWidgetDiv>
                <DashboardCalendarDaysDiv>
                    <FullCalendar 
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: "",
                            right: "prev,title,next"
                        }}
                        titleFormat={{month: "long"}}
                        height="437.5px"
                    />
                </DashboardCalendarDaysDiv>
                <DashboardCalendarListDiv>
                        <DashboardCalendarItem />
                        <DashboardCalendarItem />
                        <DashboardCalendarItem />
                    <DashboardCalendarViewMore>
                        View More
                    </DashboardCalendarViewMore>
                </DashboardCalendarListDiv>
            </DashboardCalendarWidgetDiv>
            <DashboardGraphWidgetDiv>

            </DashboardGraphWidgetDiv>
            <DashboardSliderDiv />
            <DashboardSliderDiv />
            <DashboardAnnualDiv />
            <DashboardReviewDiv />
        </DashboardMain>
    );
}