import styled from "styled-components";

export const WarningDetail = styled.div`
    position: absolute;
    top: -20px;
    background-color: var(--sub-font-color);
    padding: 10px;
    width: 200px;
    color: #fff;
    cursor: pointer;
    display: none;
    margin-top: -10px;
    font-size: 12px;
    border-radius: 5px;
`;

export const WarningIcon = styled.div`
    position: absolute;
    left: 5px;
    width: 25px; height: 25px;
    background-color: var(--sub-font-color);
    border-radius: 50%;
    color: #333;
    &:before {
        position: absolute;
        content: "!";
        color: #fff;
        margin: 5px 10px;
        font-size: 14px;
        font-weight: 700;
    }
    &:hover {
        ${WarningDetail} {
            opacity: 1;
            display: block;
            transition: .3s;
        }
    }
`;
