import { render, cleanup, screen } from "@testing-library/react"
import { LoginButton } from "./LoginStyles"

afterEach(cleanup)

test("does it show the button as red?", () => {
    render(<LoginButton type="submit" value="Log in" failed={true}/>)
    // const headerClass = LoginButton.styledComponentId;
    // const MyHeaderRoots = document.getElementsByClassName(headerClass);
    // const style = window.getComputedStyle(MyHeaderRoots[0]);
    // expect(style.backgroundColor).toBe('rgb(238, 221, 221)'); //this works!
    expect(screen.getByText('Log in')).toHaveStyle("background-color: #EEDDDD;");
});