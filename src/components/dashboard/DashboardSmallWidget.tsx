import { DashboardSmallWidgetTextBig, DashboardSmallWidgetTextSmall } from "./DashboardStyles";
import { DashboardSmallWidgetDiv, DashboardSmallWidgetIconDiv } from "./DashboardSmallWidgetStyles";

export function DashboardSmallWidget(props: any) {
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