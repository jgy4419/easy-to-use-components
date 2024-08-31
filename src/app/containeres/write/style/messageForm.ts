import styled from "styled-components";
import {TextField} from "@mui/material";

export const Container = styled.div`
`;

export const FormBox = styled.section`
    position: relative;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    padding: 10px 15px;
    background: #0F1214;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #fff;
`;