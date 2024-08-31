import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Item = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div` 
`;

export const ComponentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    overflow: auto;
`;

export const CreateButton = styled.button`
    width: 100%;
    min-width: 300px;
    height: 60px;
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
    width: 100px;
    padding: 10px 0px;
    background-color: #fff;
    border-radius: 20px;
    color: #333;
`;

export const StarCount = styled.div`
    font-size: 16px;
    margin-top: 5px;
    font-weight: 700;
`;

export const Date = styled.div`
    font-size: 16px;
    display: flex;
    align-items: center;
`;

export const EditContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
`;

export const Inner = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5% auto;
    flex-direction: column;
`;