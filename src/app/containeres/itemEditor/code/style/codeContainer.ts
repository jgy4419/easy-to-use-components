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
    //border: 2px solid #333;
`;

export const Inner = styled.div`
    position: absolute;
    inset: 0;
    margin: auto;
    border: 1px solid #fff;
    overflow: scroll;
`;

export const Tabs = styled.div`
    display: flex;
    gap: 10px;
`;

export const Tab = styled.button`
    padding: 10px;
    background: var(--button-color);
    color: #fff;
    border: 2px solid transparent;
    border-radius: 10px;
    transition: .3s;
    &:hover {
        border: 2px solid #1b6ca2;
    }
`;

export const Code = styled.pre`
    position: relative;
    overflow: scroll;
    //margin: auto;
    font-size: 12px !important;
    margin-top: 20px !important;
    background-color: #eee !important;
    padding: 10px;
    border-radius: 20px;
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
