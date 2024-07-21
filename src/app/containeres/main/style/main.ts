import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100%;
`;

export const Inner = styled.div`
    position: absolute;
    width: 70%;
    inset: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Items = styled.ul`
    width: 100%;
    background-color: #eee;
`;