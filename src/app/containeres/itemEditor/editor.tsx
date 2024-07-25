"use client";
import React, { ChangeEvent, useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import dynamic from 'next/dynamic';
import * as S from "./style/editor";
import Image from "next/image";
import star from "@/app/assets/images/Star.png";
import { inputTextChangeHandler } from "@/app/util/inputTextChange";
import { inputFileChangeHandler} from "@/app/util/inputFileChange";

const Editor = () => {
    const [Component, setComponent] = useState<any>(null);
    const param = usePathname();
    const regex = /[^/]+$/;
    const match = param.match(regex);

    useEffect(() => {
        const loadComponent = async () => {
            try {
                const ImportedComponent = dynamic(() => import(`@/app/containeres/card/${match && match[0]}`));
                setComponent(() => ImportedComponent);
            } catch (error) {
                console.error(`Error loading component`, error);
                setComponent(() => <div>Error loading component</div>);
            }
        };

        loadComponent();
    }, [param]);

    if (!Component) return <div>Loading...</div>;

    return (
        <S.Container>
            <S.Inner>
                <S.Item>
                    <Component />
                </S.Item>
                <S.Content>
                    <S.ItemName>Card1</S.ItemName>
                    <S.ItemInformation>
                        {/* TODO : 컴포넌트로 빼놓기 props로 width, height 받아오기. */}
                        <S.Star>
                            <Image src={star} alt="좋아요 개수" width={30}/>
                            <S.StarCount>20</S.StarCount>
                        </S.Star>
                        <S.Date>2024.07.24</S.Date>
                    </S.ItemInformation>
                    <S.EditContent>
                        {/* 후에 배열로 받아올 받아 뿌려줄 예정 컴포넌트로 빼기 */}
                        <S.File type="file" id="imgFile" onChange={(event) => inputFileChangeHandler(event, "Card1Content")} />
                        <S.FileStyle htmlFor="imgFile">파일 적용하기</S.FileStyle> 
                        <S.Title onChange={(event) => inputTextChangeHandler(event, "MainText")} placeholder='Some title' type="text" />
                        <S.Description placeholder="some description about this card and it's ourpose." />
                    </S.EditContent>
                </S.Content>
            </S.Inner>
        </S.Container>
    );
};

export default Editor;
