import styled from "styled-components";

export const Container = styled.header`
    position: relative;
    display: flex;
    gap: 30px;
    align-items: center;
    width: 100vw;
    height: 80px;
    background-color: rgb(15, 18, 20);
    box-sizing: border-box;
`;

export const MenuButton = styled.span`
    position: relative;
    z-index: 100;
    cursor: pointer;
`;

export const MenuUl = styled.ul<{menuulliststate: string | undefined}>`
    position: fixed;
    z-index: 11;
    width: 150px;
    height: 100%;
    top: -10px;
    left: 0;
    margin: 0;
    background: rgb(27 29 30);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    transition: .1s;
    transform: ${props => props.menuulliststate
        ? "translateX(0%)"
        : "translateX(-100%)"
    };
`;

export const MenuDetailUl = styled.ul`
    position: absolute;
    transition: .3s;
    transition-delay: .3s;
    // left: 100%;
    //font-size: 16px;
    display: flex;
    font-size: 16px;
    flex-direction: column;
    gap: 20px;
    opacity: 0;
    transform: translateX(-100%);
`;

export const BlackBackground = styled.div<{menuulliststate: string | undefined}>`
    z-index: 10;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100vh;
    opacity: .5;
    background-color: #000;
    transform: translateX(${props => props.menuulliststate === "true" ? "0%" : "-100%"});
`;

export const MenuLi = styled.li`
    width: 120px;
    position: relative;
    text-align: center;
    border-radius: 20px;
    font-size: 20px;
    cursor: pointer;
    padding: 15px 5px;
    transition: .5s;
    &:hover {
        background-color: #fff;
        color: #333;
        ${MenuDetailUl} {
            transform: translateX(180%);
            opacity: 1;
        }
    }
`;

export const MenuDetailLi = styled.li`
    transition: .3s;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    &:hover {
        color: #333;
        background: #fff;
    }
`;