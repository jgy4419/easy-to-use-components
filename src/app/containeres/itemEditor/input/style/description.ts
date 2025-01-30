import styled from "styled-components";

export const Description = styled.textarea`
    width: 100%;
    height: 120px;
    font-size: 14px;
    padding: 20px;
    margin-top: 20px;
    box-sizing: border-box;
    //background-color: rgb(15,18,20);
    border: 1px solid rgb(15,18,20);
    border-radius: 10px;
    color: var(--main-font-color);
    resize: none;
    &:focus {
        border: 1px solid var(--button-color);
    }
`;
