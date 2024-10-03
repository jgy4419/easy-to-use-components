import React, { useState, useEffect } from 'react';
import * as S from "./style/postDetail";
import { useRouter, usePathname } from "next/navigation";
import { ICommunity } from '../type/type';
import { apiDelete, apiGet } from '@/app/util/apiModule';
import { community } from '@/app/constants/errorMessage';

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
        
        const data = await apiGet(`community/detail?idx=${idx}`, community.detail);
        setCommunityData(data[0]);
    }

    const deleteButtonHandler = async () => {
        console.log("path", path.split("/")[2]);
        const postNumber = path.split("/")[2];
        if(confirm("정말로 삭제하시겠습니까?")) {
            const status = await apiDelete(`community/postDel?postNumber=${postNumber}`, community.delete);
            status && router.back();
        }
    }

    return (
        <S.Container>
            <S.Content>
                {
                    communityData
                        ? <>
                            <S.ContentHeader>
                                <S.ContentTitle>{communityData.title}</S.ContentTitle>
                                <S.ContentSubInfo>
                                    <S.ContentName>{communityData.name}</S.ContentName>
                                    <S.ContentDate>{communityData.date.split('T')[0]}</S.ContentDate>
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