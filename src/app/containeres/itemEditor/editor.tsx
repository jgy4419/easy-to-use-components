"use client";
import * as S from "./style/editor";
import React, { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import { RootState } from "@/store/rootReducer";
import {useDispatch, useSelector} from "react-redux";
import {codeStateChange} from "@/store/editor";
import { apiGet } from "@/app/util/apiModule";
import dynamic from 'next/dynamic';
import Items from "@/app/containeres/items/items";
import CodeContainer from "@/app/containeres/itemEditor/code/codeContainer";
import Content from "./Content";
import { IEditorData } from "./types/type";
import Loading from "@/app/component/Loading";
import useDataMapping from "@/app/component/hooks/useDataMapping";

const Editor = () => {
    const [Component, setComponent] = useState<React.ComponentType>();
    const [data, setData] = useState<IEditorData>({});
    const param = usePathname();
    const { codeState } = useSelector((state: RootState) => state.editor);
    const dispatch = useDispatch();
    const { getEditorData } = useDataMapping();

    const regex = /[^/]+$/;
    const match = param.match(regex);

    const componentChange = async () => {
        const componentName = match && match[0];

        // const response = await apiGet(`components/component?componentName="${componentName}"`, "컴포넌트를 불러오지 못했습니다.");

        if(match) {
            const routeSplit = String(match.input).split("/");
            const routeLength = routeSplit.length;
            const [fileName, category] = [routeSplit[routeLength-1], routeSplit[routeLength-2]];
            setData((prev: any) => ({...prev, ...getEditorData(category, fileName)}));
        }
        // setData((prev: any) => ({...prev, ...response[0]}));
    }

    useEffect(() => {
        const loadComponent = async () => {
            if(Object.keys(data).length !== 0) {
                try {
                    const ImportedComponent = dynamic(() => import(`@/app/componentList${data.jsPath}`));
                    setComponent(() => ImportedComponent);
                    // itemFilter();
                } catch (error) {
                    console.error(`Error loading component`, error);
                    // setComponent(() => <div>Error loading component</div>);
                }
            }
        };

        codeState && dispatch(codeStateChange(false));

        loadComponent();
    }, [param, data]);

    useEffect(() => {
        componentChange()
    }, []);

    if (!Component) return <Loading />

    return (
        <S.Container>
            <S.Inner>
                {
                    Object.keys(data).length === 0
                        ? <>컴포넌트 생성 도중 오류가 발생했습니다.</>
                        : <>
                            <S.Item>
                                <S.ComponentWrapper>
                                    <Component />
                                </S.ComponentWrapper>
                            </S.Item>
                            {
                                codeState
                                    ? <CodeContainer data={data}/>
                                    : <Content data={data}/>
                            }
                    </>
                }
            </S.Inner>
            <Items />
        </S.Container>
    );
};

export default Editor;
