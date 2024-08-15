import styled from 'styled-components';

export const Card2Container = styled.div`
    position: relative;
    //width: 100vw;
    //height: 50vh;
`;

export const Card2Inner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    display: none;
    transition: .5s;
    color: #fff;
`;

export const MainTitle = styled.h1`
    font-size: 50px;
`

export const SubTitle = styled.h3`
    font-size: 35px;
    margin-top: -10px;
`

export const Description = styled.p`
    width: 300px;
    font-weight: 600;
`

export const Button = styled.button`
    width: 200px;
    height: 50px;
    border: 0;
    border-radius: 20px;
    background-color: #fff;
    color: blue;
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
    transition: .5s;
    &:hover {
        background-color: blue;
        color: #fff;
        border: 2px solid #fff;
        box-sizing: border-box;
    }
`

export const Item = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    background-color: red;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: .5s;
    &:hover {
        width: 800px;
        border-radius: 40px;
        background-color: blue;
        ${Content} {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        transition: .5s;
    }
`;

export const ItemImage = styled.img`
    width: 200px;
`;