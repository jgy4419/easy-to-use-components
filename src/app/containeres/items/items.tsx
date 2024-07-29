import React, { useEffect } from 'react';
import * as S from "./style/items";
import { usePathname } from "next/navigation";
import ItemContainer from '@/app/components/itemContainer';
import { itemList } from '@/app/constants/componentList';

const Items = () => {
    const path = usePathname().split("/")[1];
    const items = itemList[path as keyof typeof itemList];
    console.log(items);
    
    return (
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
    );
};

export default Items;