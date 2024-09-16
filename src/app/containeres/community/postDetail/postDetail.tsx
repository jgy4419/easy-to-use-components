import React, { useState, useEffect } from 'react';
import * as S from "./style/postDetail";
import { useRouter, usePathname } from "next/navigation";
import { ICommunity } from '../type/type';

const PostDetail = () => {
    const router = useRouter();
    const path = usePathname();

    const [communityData, setCommunityData] = useState<ICommunity | null>(null);

    useEffect(() => {
        if(!communityData)
            getCommunityData();

        console.log("communityData", communityData);
    }, [communityData]);

    const getCommunityData = async () => {
        const match = path.match(/\/(\d+)$/);
        const idx = match ? match[1] : -1;

        console.log("params", match, idx);
        
        try {
            const response = await fetch(`/api/community/detail?idx=${idx}`);

            if(!response.ok) {
                throw new Error("게시글들을 불러오는데 실패했습니다.");
                
            }
            const data = await response.json();

            console.log(data);
            setCommunityData(data[0]);

        } catch(err) {
            console.log("데이터를 불러오는데 실패했습니다." + err);
        }
    }

    const deleteButtonHandler = () => {
        router.back();
    }

    return (
        <S.Container>
            <S.Content>
                {
                    communityData
                        ? 
                    <>
                        <S.ContentHeader>
                            <S.ContentTitle>{communityData.title}</S.ContentTitle>
                            <S.ContentSubInfo>
                                <S.ContentName>{communityData.name}</S.ContentName>
                                <S.ContentDate>{communityData.date}</S.ContentDate>
                            </S.ContentSubInfo>
                        </S.ContentHeader>
                <S.Line />
                <S.ContentBody>{communityData.content}</S.ContentBody>

                        </>
                        : <></>
                }
                <S.MoveButtonContainer>
                    <S.ListButton 
                        onClick={() => router.back()} 
                        className="defaultButton"
                    >
                        게시글 목록
                    </S.ListButton>
                    <S.CreateButton 
                        onClick={() => router.push(`write/${communityData!.idx}`)} 
                        className="defaultButton"
                    >
                        게시글 수정
                    </S.CreateButton>
                    <S.DeleteButton 
                        onClick={() => deleteButtonHandler()} 
                        className="defaultButton"
                    >
                        게시글 삭제
                    </S.DeleteButton>
                </S.MoveButtonContainer>
            </S.Content>
        </S.Container>
    );
};

export default PostDetail;