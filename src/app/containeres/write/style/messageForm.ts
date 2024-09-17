import styled from "styled-components";
import {TextField} from "@mui/material";

export const Container = styled.div`
`;

export const FormBox = styled.div`
    position: relative;
    width: 80%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: start;
    margin: auto;
`;

export const Information = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    gap: 10px;
    padding: 0 0 20px 0;
`;

export const MessageTextArea = styled(TextField)`
    display: flex;
    justify-content: center;
    background: #0F1214;
    width: 100%;
    label {
        color: grey;
    }
    div {
        color: #fff;
}
`;

export const UserName = styled(TextField)`
    margin-left: 10px;
    color: #fff;
    label, div {
        color: #eee;
        font-size: 14px;
    }
`;

export const SubmitButton = styled.button`
    position: absolute;
    bottom: -50px;
    right: 0;
    padding: 10px 15px;
    background: #0F1214;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #fff;
    transition: .3s;
    &:hover {
        background-color: #fff;
        color: #0F1214;
    }
`;

export const TitleInput = styled.input`
    position: relative;
    width: 250px;
    padding: 15px;
    top: -10px;
    background-color: rgb(15,18,20);
    color: #fff;
    border: 0;
    border-radius: 5px;
    // text-align: left;
`;