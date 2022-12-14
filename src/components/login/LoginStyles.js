import styled, { keyframes, css } from "styled-components";

const shakeLoginButton = keyframes`
    0% {transform: translateX(0%);}
    20% {transform: translateX(20%);}
    40% {transform: translateX(-20%);}
    60% {transform: translateX(20%);}
    80% {transform: translateX(-20%);}
    100% {transform: translateX(0%);}
`;
const shakeLoginButtonCss = css`
    animation-name: ${shakeLoginButton};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
`;

export const LoginFullScreen = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const LoginContainer = styled.div`
    display: inline-block;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
    background-color: #F0F0F0;
    color: #222222;
    box-shadow: 0px 20px 30px #00000014;
    text-align: center;
    width: 50%;
    min-width: 350px;
`;
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const LoginInputDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin: 20px;
    font-size: 18px;
`;
export const LoginInputField = styled.input`
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #AAAAAA;
    background-color: #FBFBFB;
`;
export const LoginButton = styled.input`
    border: 0px none transparent;
    border-radius: 8px;
    text-align: center;
    padding: 14px 0;
    background-color: ${ ({failed}) => failed ? "#EEDDDD": "#DDDDDD"};
    margin: 20px;
    width: 150px;
    font-size: 18px;
    transition: background-color 0.5s;
    &:hover {
        background-color: ${props => props.failed ? "#CCAAAA": "#BBBBBB"};
    }
    ${props => props.failed ? shakeLoginButtonCss : ""}
`;