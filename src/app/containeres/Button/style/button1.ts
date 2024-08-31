import styled from 'styled-components';

export const Button1 = styled.button`
    position: relative;
    width: 200px;
    height: 120px;
    top: 30px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: none;
    background-color: transparent;
    padding: 12px 20px;
    cursor: pointer;
    font-weight: 700;
    &:before {
        content: "";
        position: absolute;
        top: 50%;
        z-index: -1;
        translate: calc(100% + 4px) -50%;
        width: 45px;
        height: 45px;
        background: #0561ee;
        border-radius: 50px;
        transition: 
            translate 0.25s 0.25s
            cubic-bezier(0, 0, 0.5, 2),
            width 0.25s
            cubic-bezier(0, 0, 0.5, 2);
    }
    &:hover {
        &:before{
            width: 70%;
            translate: -10px -50%;
            transition:
                translate 0.25s
                cubic-bezier(0, 0, 0.5, 2),
                width 0.25s 0.25s
                cubic-bezier(0, 0, 0.5, 2);
        }
    }
`