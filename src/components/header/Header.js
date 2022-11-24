import { HeaderDiv, HeaderLeftDiv, SidebarToggle, HeaderRightDiv, HeaderSearchField, HeartDiv, EnvelopeDiv, BellDiv, MessaageDiv, UserDiv } from "./HeaderStyles"

export function Header(props) {
  return (
    <HeaderDiv sidebarShow={props.sidebarShow}>
        <HeaderLeftDiv>
            <SidebarToggle onClick={props.toggleSidebar} />
            <h2>{props.title}</h2>
        </HeaderLeftDiv>
        <HeaderRightDiv>
            <HeaderSearchField type="text"/>
            <HeartDiv />
            <EnvelopeDiv />
            <BellDiv />
            <MessaageDiv />
            <UserDiv />
        </HeaderRightDiv>
    </HeaderDiv>
  );  
} 