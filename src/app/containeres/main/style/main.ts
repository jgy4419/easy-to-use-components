import styled, { keyframes } from "styled-components";

const contentLoad = keyframes`
    0% {
        transform: translateY(500%);
    }
    100% {
        transform: translateY(0%);
    }
`;

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100%;
`;

export const Content = styled.div`
    line-height: 1;
`;

export const Title = styled.h1`
    font-size: 70px;
    animation: ${contentLoad} .5s;
`;

export const SubTitle = styled.h3`
    font-size: 50px;
    color: #e3e3e3;
    animation: ${contentLoad} .7s;
`;

export const Description = styled.p`
    font-size: 30px;
    color: grey;
    width: 70%;
    animation: ${contentLoad} 1s;
`;

export const Button = styled.button`
    border-radius: 10px;
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
    &:hover {
        border: 5px solid #1b6ca2;
    }
    &:active {
        background-color: #1b6ca2;
    }
`;

export const Inner = styled.div`
    position: absolute;
    width: 70%;
    inset: 0;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1000px) {
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
    }
`;