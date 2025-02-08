import styled from 'styled-components';

export const Button2Container = styled.div`
    position: relative;
    width: 100vw;
    height: 10vh;
`;

export const Button2Inner = styled.div`
    position: absolute;
    width: 70%;
    height: 100%;
    inset: 0;
    margin: auto;
`;

export const Buttons = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
`;

export const IconContain = styled.div`  
    font-size: 30px;
    transition: .3s;
    border: 0;
`;

export const Button = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background-color: #fff;
    border: 0 solid #fff;
    transition: .3s;
    cursor: pointer;
    &: hover {
        background-color: transparent;
        border: 3px solid #fff;
        ${IconContain} {
            color: #fff;
            transform: perspective(100px) rotateY(180deg);
        }
    }
`;
