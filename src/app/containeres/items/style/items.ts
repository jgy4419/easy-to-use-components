import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Items = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    align-items: center;
    padding: 0;
    @media (max-width: 1200px) {
        justify-content: center;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
    }
`;
