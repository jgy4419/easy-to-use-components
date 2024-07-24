import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Inner = styled.div`
    position: absolute;
    width: 70%;
    height: 80%;
    inset: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Item = styled.div`
    width: 50%;
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

export const File = styled.input`
    display: none;
`;

export const FileStyle = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 70px;
    background-color: #fff;
    border-radius: 10px;
    color: #333;
`;

export const Title = styled.input`
    width: 400px;
    height: 70px;
    border-radius: 10px;
    font-size: 16px;
    padding: 20px;
    box-sizing: border-box;
`;

export const Description = styled.textarea`
    width: 400px;
    height: 120px;
    border-radius: 10px;
    font-size: 16px;
    padding: 20px;
    box-sizing: border-box;
`;