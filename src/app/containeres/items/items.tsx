import React, { useEffect } from 'react';
import * as S from "./style/items";
import { usePathname } from "next/navigation";
import ItemContainer from '@/app/components/itemContainer';
import { itemList } from '@/app/constants/componentList';
import ErrorBoundary from "@/app/containeres/Error/ErrorBoundary";
import NoItems from "@/app/containeres/Error/NoItems";

const Items = () => {
    const path = usePathname().split("/")[1];
    const items = itemList[path as keyof typeof itemList];

    if (!items) {
        // items가 없으면 에러 처리 또는 대체 컴포넌트 렌더링
        return <NoItems item={path}/>
    }

    return (
        <ErrorBoundary>
            <S.Container>
                <S.Items>
                    {
                        Object.keys(items).map((key: string, index: number) => {
                            /*
                            * items 객체에서 특정 키에 해당하는 값을 가져오는 작업 수행.
                            */
                            const item = items[key as keyof typeof items];
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