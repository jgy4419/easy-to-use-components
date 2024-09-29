"use client";
import React from 'react';
import * as S from "@/app/containeres/itemEditor/style/editor";
import Image from "next/image";
import star from "@/app/assets/images/Star.png";
import EditorContent from "@/app/containeres/itemEditor/editorContent";
import { RootState } from "@/store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import {codeStateChange} from "@/store/editor";

const Content = ({ data }: { data: any }) => {
    const dispatch = useDispatch();
    const { codeState } = useSelector((state: RootState) => state.editor);

    return (
        <>
            {
                // 빈 객체 확인
                Object.keys(data).length !== 0
                    ?         
                    <S.Content>
                        <S.ItemName>{data.componentName}</S.ItemName>
                        <S.ItemInformation>
                            {/* TODO : 컴포넌트로 빼놓기 props로 width, height 받아오기. */}
                            <S.Star>
                                <Image src={star} alt="좋아요 개수" width={20}/>
                                <S.StarCount>20</S.StarCount>
                            </S.Star>
                            <S.Date>{String(data.date).split('T')[0]}</S.Date>
                        </S.ItemInformation>
                        {/* 수정할 수 있는 데이터들 적용하는 곳. */}
                        <EditorContent componentData={data}/>
                        <S.CreateButton className="defaultButton" onClick={() => dispatch(codeStateChange(!codeState))}>Create!</S.CreateButton>
                    </S.Content>
                    : <>Loading</>
            }
        </>
    );
};

export default Content;