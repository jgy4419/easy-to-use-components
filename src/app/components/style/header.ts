import styled from "styled-components";

export const Container = styled.header`
    position: relative;
    display: flex;
    gap: 30px;
    align-items: center;
    width: 100vw;
    height: 80px;
    background-color: rgb(15, 18, 20);
    padding: 20px;
    box-sizing: border-box;
    cursor: pointer;
`;

export const MenuButton = styled.span`
    position: relative;
    z-index: 100;
    cursor: pointer;
`;

export const MenuUl = styled.ul<{menuListState: boolean}>`
    position: fixed;
    z-index: 1;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgb(15, 18, 20);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    transition: .1s;
    transform: ${props => props.menuListState
        ? "translat₩eX(0%)"
        : "translateX(-100%)"
    };
`;

export const MenuDetailUl = styled.ul<{itemState: boolean}>`
    position: absolute;
    transition: .3s;
    transition-delay: .3s;
    // left: 100%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    opacity: 0;
    transform: translateX(-100%);
`;

export const MenuLi = styled.li`
    width: 80%;
    position: relative;
    text-align: center;
    border-radius: 20px;
    font-size: 20px;
    cursor: pointer;
    padding: 20px;
    transition: .5s;
    &:hover {
        background-color: #fff;
        color: #333;
        ${MenuDetailUl} {
            transform: translateX(150%);
            opacity: 1;
        }
    }
`;

export const MenuDetailLi = styled.li`
    transition: .3s;
    color: grey;
    &:hover {
        color: #fff;
    }
`;