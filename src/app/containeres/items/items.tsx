import React, { useEffect } from 'react';
import * as S from "./style/items";
import { usePathname } from "next/navigation";
import ItemContainer from '@/app/components/itemContainer';
import { itemList } from '@/app/constants/componentList';


const Items = () => {
    const path = usePathname().split("/")[1];
    const items = itemList[path as keyof typeof itemList];
    
    return (
        <S.Container>
            <S.Items>
                {items.imgList.map((obj, index) => {
                    return (
                        <ItemContainer key={index} image={obj} path={items.url[index]} />
                    );
                })}
            </S.Items>
        </S.Container>
    );
};

export default Items;