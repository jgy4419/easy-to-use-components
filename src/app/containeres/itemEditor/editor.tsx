"use client";
import * as S from "./style/editor";
import React, { ChangeEvent, useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import { itemList } from "@/app/constants/componentList";
import dynamic from 'next/dynamic';
import Items from "@/app/containeres/items/items";
import CodeContainer from "@/app/containeres/itemEditor/code/codeContainer";
import Content from "./Content";
import { RootState } from "@/store/rootReducer";
import {useDispatch, useSelector} from "react-redux";
import {codeStateChange} from "@/store/editor";

const Editor = () => {
    const [Component, setComponent] = useState<any>(null);
    const [data, setData] = useState({});
    const param = usePathname();
    const { codeState } = useSelector((state: RootState) => state.editor);
    const diepatch = useDispatch();

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

        codeState && diepatch(codeStateChange(false));

        loadComponent();
    }, [param]);

    if (!Component) return <div>Loading...</div>;
    console.log("codeState", codeState);

    return (
        <S.Container>
            <S.Inner>
                <S.Item>
                    <S.ComponentWrapper>
                        <Component />
                    </S.ComponentWrapper>
                    <S.CreateButton className="defaultButton">Create!</S.CreateButton>
                </S.Item>
                {
                    codeState
                        ? <CodeContainer />
                        : <Content data={data}/>
                }
            </S.Inner>
            <Items />
        </S.Container>
    );
};

export default Editor;
