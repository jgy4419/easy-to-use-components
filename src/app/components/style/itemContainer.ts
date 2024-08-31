import styled from "styled-components";

export const HoverContainer = styled.div`
    position: absolute;
    top: 0;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: .5s;
    transform: translateY(100%);
`;

export const HoverInner = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    cursor: pointer;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    background: transparent;
    width: 150px;
    height: 70px;
    transition: .3s;
    // &:hover {
    //     color: #333;
    //     background-color: #fff;
    // }
`;

export const Container = styled.div`
    position: relative;
    max-width: 500px;
    background-color: rgb(15,18,20);
    overflow: hidden;
    border-radius: 10px;
    margin-top: 50px;
    &:hover {
        ${HoverContainer} {
            transform: translateY(0%);
        }
    }
    @media (max-width: 1200px) {
        width: 100%;
    }
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const StarCount = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
`;

export const Count = styled.span`
    font-size: 20px;
`;

export const UploadTime = styled.p`
    font-size: 16px;
`;