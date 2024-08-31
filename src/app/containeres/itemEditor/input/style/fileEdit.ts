import styled from "styled-components";

export const File = styled.input`
    display: none;
`;

export const FileStyle = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: 14px;
    font-weight: 700;
    border: 5px solid rgb(15,18,20);
    border-radius: 10px;
    background-color: rgb(15,18,20);
    color: #fff;
    cursor: pointer;
    &:active {
        border: 5px solid #1b6ca2;
    }
`;