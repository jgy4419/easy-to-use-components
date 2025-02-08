import styled from 'styled-components';

export const Card7Container = styled.div`
    position: relative;
    width: 100vw;
    height: 50vh;
`;

export const Card7Inner = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 50%;
    inset: 0;
    margin: auto;
`;

export const Card7ContentDetail = styled.div`
    position: absolute;
    width: 200px;
    bottom: 0;
    color: #fff;
    display: none;
    padding: 20px;
`;

export const Card7Content = styled.div<{backImage: string}>`
    position: relative;
    width: 100px;
    height: 100%;
    border-radius: 50px;
    background-image: url(${({backImage}) => backImage});
    background-repeat: no-repeat;
    background-size: cover;
    transition: .3s;
    &:hover {
        width: 400px;
        ${Card7ContentDetail} {
            display: block;
        }
    }
`;

export const Card7ContentTitle = styled.h3`
    font-size: 25px;
`;

export const Card7ContentDescription = styled.p`
    font-size: 16px;
`;
