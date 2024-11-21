import styled from 'styled-components';

export const CaptchaGeneratorContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 600px;
`;

export const CaptchaGeneratorInner = styled.div`
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CaptchaGenerator = styled.div`
    width: 500px;
    height: 80%;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const CaptchaGeneratorTitle = styled.h1`
    text-align: center;
    font-size: 30px;
`;

export const CaptchaGeneratorRandomNumber = styled.div`
    display: flex;
    width: 60%;
    height: 40px;
    border: .5px solid #333;
    border-radius: 20px;
    justify-content: space-between;
    padding: 10px;
`;

export const CaptchaGeneratorRandomNumberResult = styled.h2`
    font-size: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 20px;
    color: grey;
`;

export const CaptchaGeneratorRandomNumberButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: #333;
    border-radius: 5px;
    border: 0;
    color: #fff;
    cursor: pointer;
`;

export const CaptchaGeneratorWriteInput = styled.input`
    width: 60%;
    padding: 20px 10px;
    border-radius: 20px;
    border: .5px solid #333;
    font-size: 18px;
    letter-spacing: 5px;
`;

export const CaptchaGeneratorResult = styled.p<{resultColor: string}>`  
    color: ${props => props.resultColor};
`;

export const CaptchaGeneratorResultButton = styled.button`
    width: 60%;
    padding: 15px 10px;
    border: 0;
    border-radius: 10px;
    background-color: #333;
    color: #fff;
    transition: .3s;
    box-sizing: border-box;
    cursor: pointer;
    &:hover { 
        color: #333;
        background-color: #fff;
        border: 1px solid #333;
    }

`;