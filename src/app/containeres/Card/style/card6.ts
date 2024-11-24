import styled from 'styled-components';

export const Card10Container = styled.div`
    position: relative;
    width: 350px;
    height: 500px;
`;

export const PosterContentBackBlurColor = styled.div`
    position: absolute;
    z-index: 1;
    background-color: #333;
    opacity: .5;
    filter: blur(2px);
    bottom: 0;
    border-radius: 0 0 20px 20px;
    width: 100%;
    height: 100%;
    transition: .5s;
    transform: translateY(100%);
`;

export const PosterContent = styled.div`
    position: absolute;
    z-index: 10;
    bottom: -10px;
    left: 5px;
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex; 
    flex-direction: column;
    gap: 15px;
    margin-left: 20px;
    transition: .5s;
    transform: translateY(100%);
    opacity: .3;
`;

export const Card10Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    margin: auto;
    &:hover {
        ${PosterContentBackBlurColor} {
            transform: translateY(0%);
            opacity: .5;
        }
        ${PosterContent} {
            transform: translateY(0%);
            opacity: 1;
        }
    }
`;

export const PosterContainer = styled.div`
    position: relative;
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
`;

export const PosterMainImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
`;

export const PosterTitle = styled.h2`
`;

export const PosterSubTitle = styled.p`
    font-size: 14px;
    color: #e3e3e3;
`;

export const PosterHashTags = styled.div`
    display: flex;
    gap: 10px;
`;

export const PosterHashTag = styled.p`
    font-size: 14px;
    border: 2px solid #fff;
    padding: 5px 10px;
    border-radius: 20px;
`;

export const PosterDescription = styled.p`
    width: 80%;
`;

export const PosterCastTitle = styled.h2`
    margin-top: 5px;
`;

export const PosterCasts = styled.div`
    display: flex;
    gap: 10px;
`;

export const PosterCast = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #fff;
    box-sizing: border-box;
`;