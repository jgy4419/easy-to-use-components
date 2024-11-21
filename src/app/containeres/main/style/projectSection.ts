import styled from "styled-components";

export const ImgContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;  
`;

export const ImgTitle = styled.h1`
    font-size: 40px;
`;

export const ImgZip = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 250px;
`;

export const Img = styled.div<{index: number}>`
    position: absolute;
    opacity: 0;
    transition: .3s;
    &:nth-child(${props => props.index}) {
        opacity: 1;
    }
`;

export const ImgButtons = styled.div`
    position: relative;
    display: flex;
    gap: 10px;
`;

export const ImgButton = styled.button<{index: number}>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #1b6ca2;
    border: 4px solid #1b6ca2;
    transition: .3s;
    cursor: pointer;

    &:nth-child(${props => props.index}) {
        border: 4px solid #fff;
    }
`;

export const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
`;

export const Description = styled.p`
    width: 500px;
    font-size: 18px;
    line-height: 2;
    color: grey;
`;

export const Button = styled.button`
    width: 200px;
    height: 60px;
    font-size: 20px;
    border: 3px solid #0F1214;
    border-radius: 20px;
    background-color: rgb(15, 18, 20);
    color: #fff;
    cursor: pointer;
    transition: .2s;
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

export const Inner = styled.div`
    position: absolute;
    width: 70%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
    margin: auto;
    inset: 0;
    @media (max-width: 1200px) {
        margin-top: 80px;
        inset: 0;
        ${ImgContent} {
            align-items: center;
        }
        ${ImgZip} {
            justify-content: center;
        }
    }
`;

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;

    @media (max-width: 1200px) {
        ${Inner} {
            flex-direction: column;
        }
        ${ImgContent} {
            height: 40%;
        }
        ${Content} {
            text-align: center;
            margin-top: 50px;
        }
        ${Description} {
            width: 100%;
            font-size: 15px;
        }
        ${Button} {
            margin: auto;
        }
        ${Img} {
            top: 5ㅋpx;
        }
        ${ImgButtons} {
            top: 50px;
        }
    }
`;