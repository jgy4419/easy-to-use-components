import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    width: 70%;
    max-width: 1200px;
    height: 250px;
    //background-color: #0F1214;
    margin: 50px auto;
    border-radius: 20px;
`;

export const Inner = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    @media (max-width: 1000px) {
        font-size: 16px;
    }
`;

export const SubTitle = styled.p`
    color: grey;
    margin-top: -5px;
`;

export const Cautions = styled.ul`
    display: flex;
    justify-content: center;
    gap: 30px;
`;

export const Caution = styled.li`
    padding: 20px;
    width: 30%;
    text-align: center;
    font-size: 12px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
        width: 25%;
        font-size: 10px;
    }
`;
