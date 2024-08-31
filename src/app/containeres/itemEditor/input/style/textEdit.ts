import styled from "styled-components";

export const Title = styled.input`
    width: 400px;
    height: 60px;
    font-size: 16px;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgb(15,18,20);
    border: 5px solid rgb(15,18,20);
    border-radius: 10px;
    color: #eee;
    &:focus {
        border: 5px solid #1b6ca2;
    }
`;