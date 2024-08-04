import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 70%;
    height: 50vh;
    margin: 5% auto 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Inner = styled.div`
    position: absolute;
    //width: 70%;
    //height: 80%;
    inset: 0;
    margin: auto;
    border: 1px solid #fff;
    overflow: scroll;
`;

export const Code = styled.pre`
    position: relative;
    overflow: scroll;
    margin: auto;
    font-size: 18px;
    background-color: #000;
`;

export const CopyButton = styled.button`
    position: absolute;
    bottom: 40px;
    right: 10px;
    width: 100px;
    height: 50px;
    font-size: 16px;
`;