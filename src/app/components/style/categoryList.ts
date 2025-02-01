import styled from "styled-components";

export const ComponentCategoryList = styled.ul`
    width: 100%;
    max-width: 1200px;
    margin: 5% auto;
    display: flex;
    justify-content: space-around;
`;

export const ComponentCategory = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
`;

export const ComponentName = styled.p`
    @media (max-width: 700px) {
        font-size: 14px;
    }
`;
