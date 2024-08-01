import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Item = styled.div`
    width: 50%;
    height: 35%;
    display: flex;
    flex-direction: column;
    //border: 1px solid #fff;
`;

export const ComponentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const CreateButton = styled.button`
    background-color: #1b6ca2;
    color: #fff;
    width: 30%;
    min-width: 300px;
    height: 100px;
    margin: auto;
    transform: translateY(30px);
    border-radius: 10px;
    border: 3px solid #1b6ca2;
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background-color: transparent;
        color: #1b6ca2;
    }
    &:nth-child(4) {
        display: none;
    }
`;

export const Content = styled.div` 
    
`;

export const ItemName = styled.h1`
`;

export const ItemInformation = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

export const Star = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 120px;
    padding: 10px 0px;
    background-color: #fff;
    border-radius: 20px;
    color: #333;
`;

export const StarCount = styled.div`
    font-size: 20px;
    margin-top: 5px;
    font-weight: 700;
`;

export const Date = styled.div`
    font-size: 25px;
`;

export const EditContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
`;

export const Inner = styled.div`
    //position: absolute;
    width: 70%;
    height: 80%;
    inset: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    //flex-direction: column;
    @media (max-width: 1200px) {
        flex-direction: column;
        margin-top: 20%;
        ${ComponentWrapper} {
            margin-bottom: 30%;
        }
        ${CreateButton} {
            &:nth-child(2) {
                display: none;
            }
            &:nth-child(4) {
                display: block;
                margin-top: 30px;
                width: 100%;
                height: 80px;   
                font-size: 20px;
            }
        }
    }
    @media (max-width: 1100px) {
        margin-top: 50%;
    }
`;