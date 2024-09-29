import styled from "styled-components";

export const Description = styled.textarea`
    width: 100%;
    height: 120px;
    font-size: 14px;
    padding: 20px;
    margin-top: 20px;
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