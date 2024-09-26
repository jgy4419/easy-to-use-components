import styled, { keyframes } from "styled-components";

const contentLoad = keyframes`
    0% {
        transform: translateY(500%);
    }
    100% {
        transform: translateY(0%);
    }
`;

const upDownMove = keyframes`
    0% {
        transform: translateY(0%);            
    }
    50% {
        transform: translateY(20%);
    }
    100% {
        transform: translate(0%);
    }
`;

export const Content = styled.div`
    line-height: 1;
`;

export const Title = styled.h1`
    font-size: 60px;
    animation: ${contentLoad} .5s;
`;

export const SubTitle = styled.h3`
    font-size: 30px;
    color: #e3e3e3;
    animation: ${contentLoad} .7s;
`;

export const Description = styled.p`
    font-size: 20px;
    color: grey;
    width: 70%;
    animation: ${contentLoad} 1s;
    line-height: 1.5;
`;

export const Button = styled.button`
    //border-radius: 10px;
    width: 200px;
    height: 80px;
    font-size: 20px;
    border: 5px solid #0F1214;
    border-radius: 20px;
    background-color: rgb(15,18,20);
    color: #fff;
    cursor: pointer;
    transition: .2s;
    animation: ${contentLoad} 1s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    &:hover {
        border: 3px solid #1b6ca2;
    }
    &:active {
        background-color: #1b6ca2;
    }
`;

export const ScrollButton = styled(Button)`
    margin-top: 30px;
    animation: ${upDownMove} 1s ease-in-out infinite;
`;

export const Inner = styled.div`
    position: absolute;
    width: 80%;
    max-width: 1200px;
    inset: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1200px) {
        flex-direction: column-reverse;
        justify-content: center;
        text-align: center;
        ${Title} {
            font-size: 50px;
        }
        ${SubTitle} {
            font-size: 30px;
        }
        ${Description} {
            width: 100%;
            font-size: 20px;
        }
        ${Button} {
            margin: auto;
        }
    }
`;