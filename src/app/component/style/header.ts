import styled from "styled-components";

export const Container = styled.header`
    position: relative;
    display: flex;
    width: 100vw;
    height: 80px;
    background: var(--background-color);
    box-sizing: border-box;
    border-bottom: 2px solid var(--line-color);
`;

export const Inner = styled.div`
    width: 60%;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    @media (max-width: 1200px) {
        width: 80%;
    }
`;

export const MenuButton = styled.span`
    position: relative;
    z-index: 100;
    cursor: pointer;
`;

export const MenuUl = styled.ul`
    display: flex;
`;

export const MenuLi = styled.li`
    position: relative;
    text-align: center;
    color: var(--main-font-color);
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    padding: 10px 10px;
    font-weight: 600;
    transition: .3s;
    &:hover {
        color: #407da5;
        opacity: 1;
    }
    @media (max-width: 700px) {
        font-size: 12px;
    }
    @media (max-width: 400px) {
        font-size: 10px;
    }
`;
