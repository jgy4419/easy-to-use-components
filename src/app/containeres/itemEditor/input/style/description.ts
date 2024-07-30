import styled from "styled-components";

export const Description = styled.textarea`
    width: 400px;
    height: 160px;
    font-size: 18px;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgb(15,18,20);
    border: 5px solid rgb(15,18,20);
    border-radius: 10px;
    color: #eee;
    resize: none;
    &:focus {
        border: 5px solid #1b6ca2;
    }
`;