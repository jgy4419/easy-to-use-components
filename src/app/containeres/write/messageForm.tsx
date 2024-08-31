"use client";
import React from 'react';
import * as S from "./style/messageForm";
import List from "./list";
import Box from "@mui/material/Box";
import {AccountCircle} from "@mui/icons-material";

const MessageForm = () => {
    const testComponentList = ["Card", "Button"];
    const testNameList = ["Card1", "Card2"];

    const submitHandler = () => {
        alert("작성 완료!");
    }

    return (
        <S.Container>
            <S.FormBox>
                <S.Information>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: '#fff', mr: 1, my: 0.5 }} />
                        <S.UserName id="input-with-lx" label="name" variant="standard" />
                    </Box>
                    <List title="Component" list={testComponentList}/>
                    <List title="Name" list={testNameList}/>
                </S.Information>
                <S.MessageTextArea
                    id="outlined-multiline-static"
                    label="내용을 입력해주세요"
                    multiline
                    rows={4}
                />
            </S.FormBox>
            <S.SubmitButton onClick={submitHandler}>Submit</S.SubmitButton>
        </S.Container>
    );
};

export default MessageForm;