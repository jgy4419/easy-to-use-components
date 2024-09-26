import styled from "styled-components";

export const ComponentCategoryList = styled.ul`
    width: 100%;
    max-width: 1200px;
    margin: 50px auto;
    display: flex;
    justify-content: space-around;
`;

export const ComponentCategory = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

export const ComponentIcon = styled.span`
    width: 70px;
    height: 70px;
    background-color: #282F34;
    border-radius: 10px;
    @media (max-width: 700px) {
        width: 50px;
        height: 50px;
    }
`;

export const ComponentName = styled.p`
    @media (max-width: 700px) {
        font-size: 14px;
    }
`;