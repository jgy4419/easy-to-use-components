import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Items = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    @media (max-width: 1200px) {
        justify-content: center;
    }
`;


export const ItemContainer = styled.div`
    
`;
