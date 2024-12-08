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
    font-size: 50px;
    animation: ${contentLoad} .5s;
    @media (max-width: 700px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h3`
    font-size: 30px;
    color: #e3e3e3;
    animation: ${contentLoad} .7s;
    @media (max-width: 1200px) {
        width: 100%;            
    }
    @media (max-width: 700px) {
        font-size: 20px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    color: grey;
    width: 70%;
    animation: ${contentLoad} 1s;
    line-height: 1.5;
    @media (max-width: 1200px) {
        width: 100%;
    }
    @media (max-width: 700px) {
        font-size: 16px;
    }
`;

export const Button = styled.button`
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
    @media (max-width: 1200px) {
        margin: auto;
    }
`;

export const ScrollButton = styled(Button)`
    margin-top: 30px;
    animation: ${upDownMove} 1s ease-in-out infinite;
    @media (max-width: 700px) {
        width: 150px;
        height: 60px;
        font-size: 14px;
    }
`;

export const Inner = styled.div`
    position: absolute;
    width: 70%;
    max-width: 1000px;
    inset: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1200px) {
        flex-direction: column-reverse;
        justify-content: center;
        text-align: center;
    }
`;

export const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    @media (max-width: 700px) {
        width: 150px;
        height: 150px;
    }
    > img {
        width: 100%;
        height: 100%;
    }
`;