import styled from 'styled-components';

export const Card9Container = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
`;

export const Card9Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Card9ContentTopBack = styled.div`
    position: absolute;
    transition: .5s;
    transform : translateX(-100%);
    top: 0;
    width: 100%;
    height: 50%;
    border-radius: 10px 10px 0 0;
    background: rgba(0, 0, 0, 0.5);
`;

export const Card9ContentBottomBack = styled.div`
    position: absolute;
    bottom: 0;
    transition: .7s;
    transform : translateX(-100%);
    width: 100%;
    height: 50%;
    border-radius: 0px 0px 10px 10px;
    background: rgba(0, 0, 0, 0.5);
`;

export const Card9ContentTitle = styled.h1`
    color: #fff;
    opacity: 0;
    transition: .5s;
    transform : translateY(50px);
`;

export const Card9ContentDescription = styled.p`
    color: #fff;
    opacity: 0;
    transition: .8s;
    transform : translateY(50px);
`;

export const Card9Content = styled.div`
    position: relative;
    width: 300px;
    height: 80%;
    background-color: #eee;
    border-radius: 10px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    &:hover {
        ${Card9ContentTopBack} {
            transform : translateX(0%);
        }
        ${Card9ContentBottomBack} {
            transform : translateX(0%);
        }
        ${Card9ContentTitle} {
            opacity: 1;
            transform: translateY(-20%);
        }
        ${Card9ContentDescription} {
            opacity: 1;
            transform: translateY(-20%);
        }
    }
`;

export const Card9ContentInner = styled.div`
    position: absolute;
    display: flex;
    padding: 20px;
    // box-sizing: content-box;
    flex-direction: column;
    gap: 10px;
    width: 80%;
    height: 50%;
    bottom: 0;
`;