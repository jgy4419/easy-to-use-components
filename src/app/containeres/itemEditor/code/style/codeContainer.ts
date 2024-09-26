import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    height: 500px;
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
    font-size: 12px !important;
    background-color: transparent !important;
`;

export const CopyButton = styled.button`
    position: absolute;
    bottom: 40px;
    right: 10px;
    width: 100px;
    height: 50px;
    font-size: 16px;
`;

export const BeforeButton = styled.button`
    position: absolute;
    bottom: -30px;
    right: 0;
    width: 180px;
    height: 60px;
    border-radius: 0;
    //border-radius: 10px;
`;