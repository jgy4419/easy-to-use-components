import React from 'react';
import * as S from "./style/postDetail";
import { useRouter } from "next/navigation";

const PostDetail = () => {
    const testContent = {
        title: "제목입니다.",
        name: "닉네임",
        date: "20240901",
        content: "문의내용~"
    };
    const router = useRouter();

    return (
        <S.Container>
            <S.Content>
                <S.ContentHeader>
                    <S.ContentTitle>{testContent.title}</S.ContentTitle>
                    <S.ContentSubInfo>
                        <S.ContentName>{testContent.name}</S.ContentName>
                        <S.ContentDate>{testContent.date}</S.ContentDate>
                    </S.ContentSubInfo>
                </S.ContentHeader>
                <S.Line />
                <S.ContentBody>{testContent.content}</S.ContentBody>
                <S.MoveButtonContainer>
                    <S.ListButton 
                        onClick={() => router.back()} 
                        className="defaultButton"
                    >
                            글목록
                    </S.ListButton>
                    <S.CreateButton 
                        onClick={() => router.push("write")} 
                        className="defaultButton"
                    >
                        글작성
                    </S.CreateButton>
                </S.MoveButtonContainer>
            </S.Content>
        </S.Container>
    );
};

export default PostDetail;