"use client";
import React, { ChangeEvent, useEffect, useState } from 'react';
import { usePathname, useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
import EditorContent from "@/app/containeres/itemEditor/editorContent";
import * as S from "./style/editor";
import Image from "next/image";
import star from "@/app/assets/images/Star.png";
import { itemList } from "@/app/constants/componentList";
import Items from "@/app/containeres/items/items";
import CodeContainer from "@/app/containeres/itemEditor/code/codeContainer";


const Editor = () => {
    const [Component, setComponent] = useState<any>(null);
    const [data, setData] = useState({});
    const param = usePathname();
    const route = useRouter();

    const regex = /[^/]+$/;
    const match = param.match(regex);

    const itemFilter = () => {
        if(match && match.input) {
            const pathArr = match.input.split("/").filter(Boolean);
            const [category, itemName] = pathArr;
            const mainCategory = itemList[category as keyof typeof itemList];

            setData(mainCategory[itemName as keyof typeof mainCategory]);
        }
    }

    // 컴포넌트 코드를 제공해주는 박스 생성.
    const createCodeBox = () => {
        alert("!");
    }

    useEffect(() => {
        const loadComponent = async () => {
            console.log("match!", match);
            try {
                const ImportedComponent = dynamic(() => import(`@/app/containeres${match && match.input}`));
                setComponent(() => ImportedComponent);
                itemFilter();
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
                    <S.ComponentWrapper>
                        <Component />
                    </S.ComponentWrapper>
                    <S.CreateButton className="defaultButton" onClick={createCodeBox}>Create!</S.CreateButton>
                </S.Item>
                <S.Content>
                    <S.ItemName>{data.url}</S.ItemName>
                    <S.ItemInformation>
                        {/* TODO : 컴포넌트로 빼놓기 props로 width, height 받아오기. */}
                        <S.Star>
                            <Image src={star} alt="좋아요 개수" width={30}/>
                            <S.StarCount>20</S.StarCount>
                        </S.Star>
                        <S.Date>2024.07.24</S.Date>
                    </S.ItemInformation>
                    {/* 수정할 수 있는 데이터들 적용하는 곳. */}
                    <EditorContent componentData={data}/>
                    <S.CreateButton className="defaultButton" onClick={() => route.push(`${param}/code`)}>Create!</S.CreateButton>
                </S.Content>
            </S.Inner>
            <CodeContainer />
            <Items />
        </S.Container>
    );
};

export default Editor;
