import { DashboardReviewAll, DashboardReviewDiv, DashboardReviewItem, DashboardReviewItemAvatar, DashboardReviewItemBelow, DashboardReviewItemButton, DashboardReviewItemButtonDiv, DashboardReviewItemText, DashboardReviewItemUserDiv, DashboardReviewItemUsername, DashboardReviewItemWhen, DashboardReviewMainArea, DashboardReviewTitle } from "./DashboardStyles";
import { ReactComponent as ApproveSvg } from "../../img/approve-icon.svg";
import { ReactComponent as RejectSvg } from "../../img/reject-icon.svg";
import { ReactComponent as ArrowSvg } from "../../img/right-arrow-icon.svg";

export function DashboardReviewWidget (props) {
    return (
        <DashboardReviewDiv>
            <DashboardReviewTitle>
                Latest Review by Customers
            </DashboardReviewTitle>
            <DashboardReviewMainArea>
                <DashboardReviewItem>
                    <DashboardReviewItemText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </DashboardReviewItemText>
                    <DashboardReviewItemBelow>
                        <DashboardReviewItemUserDiv>
                            <DashboardReviewItemAvatar />
                            <div>
                                <DashboardReviewItemUsername>
                                    Jacinto
                                </DashboardReviewItemUsername>
                                <DashboardReviewItemWhen>
                                    23 min
                                </DashboardReviewItemWhen>
                            </div>
                        </DashboardReviewItemUserDiv>
                        <DashboardReviewItemButtonDiv>
                            <DashboardReviewItemButton color="#FF0000">
                                <ApproveSvg />
                            </DashboardReviewItemButton>
                            <DashboardReviewItemButton color="#00FF00">
                                <RejectSvg />
                            </DashboardReviewItemButton>
                        </DashboardReviewItemButtonDiv>
                    </DashboardReviewItemBelow>
                </DashboardReviewItem>
                <DashboardReviewItem>
                    <DashboardReviewItemText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </DashboardReviewItemText>
                    <DashboardReviewItemBelow>
                        <DashboardReviewItemUserDiv>
                            <DashboardReviewItemAvatar />
                            <div>
                                <DashboardReviewItemUsername>
                                    Jacinto
                                </DashboardReviewItemUsername>
                                <DashboardReviewItemWhen>
                                    23 min
                                </DashboardReviewItemWhen>
                            </div>
                        </DashboardReviewItemUserDiv>
                        <DashboardReviewItemButtonDiv>
                            <DashboardReviewItemButton color="#FF0000">
                                <ApproveSvg />
                            </DashboardReviewItemButton>
                            <DashboardReviewItemButton color="#00FF00">
                                <RejectSvg />
                            </DashboardReviewItemButton>
                        </DashboardReviewItemButtonDiv>
                    </DashboardReviewItemBelow>
                </DashboardReviewItem>
                <DashboardReviewItem>
                    <DashboardReviewItemText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </DashboardReviewItemText>
                    <DashboardReviewItemBelow>
                        <DashboardReviewItemUserDiv>
                            <DashboardReviewItemAvatar />
                            <div>
                                <DashboardReviewItemUsername>
                                    Jacinto
                                </DashboardReviewItemUsername>
                                <DashboardReviewItemWhen>
                                    23 min
                                </DashboardReviewItemWhen>
                            </div>
                        </DashboardReviewItemUserDiv>
                        <DashboardReviewItemButtonDiv>
                            <DashboardReviewItemButton color="#FF0000">
                                <ApproveSvg />
                            </DashboardReviewItemButton>
                            <DashboardReviewItemButton color="#00FF00">
                                <RejectSvg />
                            </DashboardReviewItemButton>
                        </DashboardReviewItemButtonDiv>
                    </DashboardReviewItemBelow>
                </DashboardReviewItem>
                <DashboardReviewAll>
                    <ArrowSvg />
                </DashboardReviewAll>
            </DashboardReviewMainArea>
        </DashboardReviewDiv>
    );
}