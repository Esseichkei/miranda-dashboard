import { DashboardSmallWidgetDiv, DashboardSmallWidgetIconDiv, DashboardSmallWidgetTextBig, DashboardSmallWidgetTextSmall } from "./DashboardStyles";

export function DashboardSmallWidget(props) {
    return (
        <DashboardSmallWidgetDiv active={props.active}>
            <DashboardSmallWidgetIconDiv active={props.active}>
                {props.children}
            </DashboardSmallWidgetIconDiv>
            <div>
                <DashboardSmallWidgetTextBig>{props.number}</DashboardSmallWidgetTextBig>
                <DashboardSmallWidgetTextSmall>{props.text}</DashboardSmallWidgetTextSmall>
            </div>
        </DashboardSmallWidgetDiv>
    );
}