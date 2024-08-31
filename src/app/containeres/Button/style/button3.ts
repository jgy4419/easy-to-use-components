import styled from "styled-components";

export const Button3Container = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(#D2E0FB, #B931FC);
    border: 0;
    color: #fff;
    border-radius: 40px;
    transition: transform 0.3s;
    font-weight: 700;
    font-size: 20px;
`;

export const Button3DImg = styled.img`
    position: absolute;
    width: 80px;
    opacity: 0;
    transition: 
        2s
        cubic-bezier(0, 2, 0.5, 2);
    transform: translateY(20px);
`;

export const ButtonContent = styled.div`
    position: relative;
    width: 150px;
    height: 70px;
    cursor: pointer;
    &:hover {
        ${Button} {
            transform: scale(1.2);
        }
        ${Button3DImg}{
            opacity: .8;
            transition: 
                .3s 
                cubic-bezier(0, 2, 0.5, 2);
            &:nth-child(2) {
                transform: translate(70px, -30px);
            }
            &:nth-child(3) {
                transform: translate(30px, 30px);
            }
            &:nth-child(4) {
                width: 50px;
                transform: translate(0px, 5px);
            }
        }
    }
`;