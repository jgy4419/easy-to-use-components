import styled from "styled-components";

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    color: var(--main-font-color);
`;

export const Description = styled.p`
    color: var(--sub-font-color);
`;

export const StepButtons = styled.ul`
    display: flex;
    gap: 20px;
`;

export const StepButton = styled.li`
    color: var(--main-font-color);
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 15px;
    font-size: 12px;
    transition: .3s;
`;

export const StepPreView = styled.div`
    width: 500px;
    height: 300px;
    border-radius: 20px;
    box-shadow: var(--shadow-value);
    background-size: cover;
    border: 0;
    transition: .3s ease-in-out;
`;

export const SampleMoreButton = styled.p`
    color: var(--button-color);
    cursor: pointer;
`;

export const Container = styled.section`
    position: relative;
    width: var(--desktop-width);
    //min-height: 100vh;
    margin: 100px auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1200px) {
        ${Title} {
            font-size: 20px;
        }
        ${Description} {
            font-size: 12px;
        }
        ${StepButton} {
            font-size: 10px;
        }
        ${StepPreView} {
            width: 350px;
            height: 200px;
        }
        ${SampleMoreButton} {
            margin-top: 30px;
            font-size: 14px;
        }
    }
`;
