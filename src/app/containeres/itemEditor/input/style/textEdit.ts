import styled from "styled-components";

export const Title = styled.input`
    width: 100%;
    height: 60px;
    font-size: 16px;
    padding: 20px;
    margin-top: 20px;
    box-sizing: border-box;
    //background-color: rgb(15,18,20);
    border: 1px solid rgb(15,18,20);
    border-radius: 10px;
    color: var(--main-font-color);
    &:focus {
        border: 1px solid var(--button-color);
    }
`;
