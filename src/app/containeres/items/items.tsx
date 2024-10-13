"use client";
import React, { useEffect, useState } from 'react';
import * as S from "./style/items";
import { usePathname } from "next/navigation";
import ItemContainer from '@/app/components/itemContainer';
import ErrorBoundary from "@/app/containeres/Error/ErrorBoundary";
import NoItems from "@/app/containeres/Error/NoItems";
import CategoryList from '@/app/components/categoryList';
import { apiGet } from '@/app/util/apiModule';
import Loading from '@/app/components/Loading';

const Items = () => {
    const path = usePathname().split("/")[2];
    const [items, setItems] = useState<any[]>([]);
    const [loadingState, setLoadingState] = useState(true);
    
    const itemListChange = async (path: string) => {
        console.log("path", path);
        
        try {
            const response = await apiGet(
                `components/componentList?name="${path}"`, 
                "컴포넌트들을 불러오지 못했습니다."
            );
            
            setItems(prev => [...prev, ...response]);
        } catch(err) {
            console.log("에러 발생!", err);
        } finally {
            setLoadingState(false);
        }
    }

    useEffect(() => {
        itemListChange(path);
    }, [path]);

    if(loadingState) {
        return <Loading />
    }

    if (items.length === 0) {
        // items가 없으면 에러 처리 또는 대체 컴포넌트 렌더링
        return <NoItems item={path}/>
    }

    return (
        <ErrorBoundary>
            <S.Container>
                <CategoryList />
                <S.Items>
                    {
                        items.map((item, index: number) => {
                            /*
                            * items 객체에서 특정 키에 해당하는 값을 가져오는 작업 수행.
                            */
                            // const item = items[key as keyof typeof items];
                           
                            return (
                                <ItemContainer key={index} obj={item} />
                            )
                        })
                    }
                </S.Items>
            </S.Container>
        </ErrorBoundary>
    );
};

export default Items;