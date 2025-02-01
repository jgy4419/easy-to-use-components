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

export const Container = styled.div`
    position: relative;
    margin: auto;
    max-width: 80%;
    height: 600px;
    //min-height: 500px;
    max-height: 800px;
`;

export const Content = styled.div`
    line-height: 1;
`;

export const Title = styled.h1`
    font-size: 30px;
    width: 60%;
    animation: ${contentLoad} .5s;
    color: var(--main-font-color);
    line-height: 1.2;
    margin-top: -20%;
    @media (max-width: 700px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: var(--sub-font-color);
    animation: ${contentLoad} .7s;
    @media (max-width: 1200px) {
        width: 100%;
    }
    @media (max-width: 700px) {
        font-size: 20px;
    }
`;

export const BackColorText = styled.span`
    background-image: url("/image/components/main/backgroundText.png");
    background-size: cover;
    background-position-x: -1px;
    background-repeat: no-repeat;
    padding: 2px;
`;

export const MainDemoContainer = styled.div`
    position: relative;
    width: 70%;
    max-width: 400px;
    margin-top: 25%;
`;

export const MainDemoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 200px;
    box-shadow: var(--shadow-value);
    padding: 20px;
    border-radius: 20px;
`;

export const MainDemoList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const MainDemoItem = styled.li< { img: string }>`
    background-image: url("${props => props.img}");
    width: 50px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
`;

export const MainDemoText = styled.p`
    text-align: center;
    color: var(--sub-font-color);
`;

export const MainDemoButton = styled.button`
    width: 120px;
    margin: 0 auto 20px auto;
    height: 40px;
    border: 0;
    background: var(--button-color);
    color: #fff;
    border-radius: 20px;
    transition: .3s;
    &:active {
        background-color: var(--button-active-color);
        //color: 
    }
`;

export const Inner = styled.div`
    width: 70%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1200px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        //margin-top: 30%;
        //margin: auto;
        ${Title} {
            font-size: 20px;
            width: 80%;
            margin: auto;
        }
        ${SubTitle} {
            font-size: 12px;
        }
        ${MainDemoContainer} {
            margin-top: 5%;
            width: 500px;
        }
        ${MainDemoBox} {
            height: 180px;
        }
        ${MainDemoText} {
            font-size: 12px;
        }
        ${MainDemoButton} {
            font-size: 12px;
            height: 30px;
        }
    }
`;
