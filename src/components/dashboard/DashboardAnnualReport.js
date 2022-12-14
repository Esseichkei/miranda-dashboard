import { DashboardAnnualAd, DashboardAnnualAdText, DashboardAnnualArrow, DashboardAnnualDiv, DashboardAnnualLabel, DashboardAnnualNumber, DashboardAnnualRow } from "./DashboardStyles";
import { ReactComponent as ArrowSvg } from "../../img/right-arrow-icon.svg";

export function DashboardAnnualReport(props) {
    return (
        <DashboardAnnualDiv>
            <DashboardAnnualRow>
                <div>
                    <DashboardAnnualNumber>568</DashboardAnnualNumber>
                    <DashboardAnnualLabel>Things</DashboardAnnualLabel>
                </div>
                <div>
                    <DashboardAnnualNumber>568</DashboardAnnualNumber>
                    <DashboardAnnualLabel>Things</DashboardAnnualLabel>
                </div>
                <div>
                    <DashboardAnnualNumber>568</DashboardAnnualNumber>
                    <DashboardAnnualLabel>Things</DashboardAnnualLabel>
                </div>
                <div>
                    <DashboardAnnualNumber>568</DashboardAnnualNumber>
                    <DashboardAnnualLabel>Things</DashboardAnnualLabel>
                </div>
            </DashboardAnnualRow>
            <DashboardAnnualRow>
                <div>
                    <DashboardAnnualAd>
                        Let Miranda Dashboard give you an annual report...
                    </DashboardAnnualAd>
                    <DashboardAnnualAdText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo
                    </DashboardAnnualAdText>
                </div>
                <DashboardAnnualArrow>
                    <ArrowSvg />
                </DashboardAnnualArrow>
            </DashboardAnnualRow>
        </DashboardAnnualDiv>
    );
}