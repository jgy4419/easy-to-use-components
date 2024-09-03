"use client";
import React from 'react';
import * as S from "./style/messageForm";
import List from "./list";
import Box from "@mui/material/Box";
import { AccountCircle } from "@mui/icons-material";
import { RootState } from "@/store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { titleChange, nameChange, contentChange } from "@/store/community";
import { useRouter } from "next/navigation";

// 액션 타입 정의
type ActionMap = {
    title: typeof titleChange,
    name: typeof nameChange,
    content: typeof contentChange
}

const MessageForm = () => {
    const testComponentList = ["Card", "Button"];
    const testNameList = ["Card1", "Card2"];

    const dispatch = useDispatch();
    const router = useRouter();

    const { title, name, content, password, category, component } = useSelector((state: RootState) => state.community);

    const textChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, item: keyof ActionMap) => {
        const value = event.target.value;

        // actionMap 객체에서 액션 생성자 함수를 매핑합니다.
        const actionMap: ActionMap = {
            title: titleChange,
            name: nameChange,
            content: contentChange
        };

        const action = actionMap[item];

        if (action) {
            dispatch(action(value)); // 함수 호출 시 값을 전달하여 액션을 생성하고 dispatch합니다.
        }

        console.log(title, name, content);
    }

    const submitHandler = async () => {
        const data = {
            title: title,
            name: name,
            content: content,
            password: password,
            category: category,
            component: component
        };

        console.log("data 전송", data);

        await fetch("/api/community/write", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(() => {
            router.back();
        });
    }

    return (
        <S.Container>
            <S.FormBox>
                <S.TitleInput onChange={(event) => textChange(event, "title")} placeholder='제목을 입력해주세요.' type="text" />
                <S.Information>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: '#fff', mr: 1, my: 0.5 }} />
                        <S.UserName 
                            id="input-with-lx" 
                            label="name" 
                            variant="standard" 
                            onChange={(event) => textChange(event, "name")}
                        />
                    </Box>
                    <List title="category" list={testComponentList} />
                    <List title="component" list={testNameList} />
                </S.Information>
                <S.MessageTextArea
                    id="outlined-multiline-static"
                    label="내용을 입력해주세요"
                    multiline
                    rows={4}
                    onChange={(event) => textChange(event, "content")}
                />
                <S.SubmitButton onClick={submitHandler}>Submit</S.SubmitButton>
            </S.FormBox>
        </S.Container>
    );
};

export default MessageForm;
