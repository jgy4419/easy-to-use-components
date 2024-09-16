"use client";
import React, { useEffect, useState } from 'react';
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

const MessageForm = ({ postIndex }: {postIndex: string | -1}) => {
    // 수정하기
    const testComponentList = ["Card", "Button"];
    const testNameList = ["Card1", "Card2"];

    const dispatch = useDispatch();
    const router = useRouter();

    const { title, name, content, password, category, component } = useSelector((state: RootState) => state.community);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        component: "",
        date: "",
        idx: -1,
        name: "",
        password: "",
        category: ""
    });

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
            component: component,
            updateIndex: formData.idx
        };

        console.log("data 전송", data);

        if(formData.idx === -1) {
            await fetch("/api/community/write", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then(() => {
                router.back();
            });
        } else {
            await fetch("/api/community/postEdit", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then(() => {
                router.back();
            }); 
        }
    }

    useEffect(() => {
        console.log("updateIndex", postIndex);
        if(postIndex !== -1) {
            postData();
        }
    }, [postIndex]);

    const postData = async () => {
        const response = await fetch(`/api/community/detail?idx=${postIndex}`);

        if(!response.ok) {
            throw new Error("게시글을 불러오는데 실패했습니다.");
        }
        const data = await response.json();
        
        setFormData(data[0]);
        console.log(data[0]);
    }

    return (
        <S.Container>
            <S.FormBox>
                <S.TitleInput onChange={(event) => textChange(event, "title")} placeholder={formData.title} type="text" />
                <S.Information>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: '#fff', mr: 1, my: 0.5 }} />
                        <S.UserName 
                            id="input-with-lx" 
                            label={formData.name}
                            variant="standard" 
                            onChange={(event) => textChange(event, "name")}
                        />
                    </Box>
                    <List title="category" list={testComponentList} />
                    <List title="component" list={testNameList} />
                </S.Information>
                <S.MessageTextArea
                    id="outlined-multiline-static"
                    label={formData.content}
                    multiline
                    rows={4}
                    onChange={(event) => textChange(event, "content")}
                />
                <S.SubmitButton onClick={submitHandler}>
                    {
                        formData.idx === -1
                            ? "Submit"
                            : "Update"
                    }
                </S.SubmitButton>
            </S.FormBox>
        </S.Container>
    );
};

export default MessageForm;
