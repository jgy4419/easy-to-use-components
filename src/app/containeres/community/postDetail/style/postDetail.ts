import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 70%;
    height: 100vh;
    margin: auto;
    
`;

export const Inner = styled.div`

`;

export const Content = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #0F1214;
    padding: 20px;
    border-radius: 20px;
`;

export const ContentHeader = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Line = styled.hr`
    // background: grey;
    width: calc(100% + 35px);
    margin-left: -20px;
    border: 1px solid grey;
`;

export const ContentTitle = styled.h2`

`;

export const ContentSubInfo = styled.div`
    display: flex;
    gap: 20px;
    color: grey;
    font-size: 14px;
`;

export const ContentName = styled.p`
`;

export const ContentDate = styled.p`
`;

export const ContentBody = styled.p`
    min-height: 500px;
`;

export const MoveButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

export const ListButton = styled.button`
`;

export const CreateButton = styled.button`
`;

export const DeleteButton = styled.button`
    background-color: red;
    border: 0;
    border: 2px solid red;
    &:hover {
        background-color: transparent;
        border: 2px solid red;
        color: #fff;
    }
`;