import styled from "styled-components";

export const SearchContainer = styled.div`
    position: relative;
    z-index: 10;
    width: 70%;
    max-width: 1200px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin: auto;
`;

export const CreatePost = styled.div`
    font-weight: 700;
    cursor: pointer;
    padding: 15px 30px;
    background-color: rgb(15,18,20);
    border: 2px solid rgb(15,18,20);
    transition: .3s;
    border-radius: 10px;
    &:hover {
        border: 2px solid #1b6ca2;
    }
    &:active {
        background: #1b6ca2;
    }
`;

export const SearchWrapper = styled.main`
    position: relative;
    width: 250px;
    display: flex;
    margin: auto;
`;

export const SearchInput = styled.input`
    // position: absolute;
    width: 100%;
    right: 12%;
    border-radius: 10px;
    background-color: #0F1214;
    color: #fff;
    border: 0;
    padding: 15px 20px;
`;

export const IconContainer = styled.div`
    position: absolute;
    right: 10px;
    cursor: pointer;
`;