import React from 'react';
import * as S from "../style/header";
import { useRouter } from "next/navigation";
import Link from "next/link";

/*
    Header에서 메뉴 상세를 받아오는 컴포넌트.
    ex. Components 누르면 하위 카테고리들 불러옴.
*/

interface IHeaderListItemProps {
    itemList: string[],
    itemState: boolean
}

const HeaderListItem = ({ itemList, itemState }: IHeaderListItemProps) => {
    const router = useRouter();

    const menuItemClick = (str: string) => {
        router.push(str);
    }

    console.log(itemList, itemState);

    return (
        <>
            <S.MenuDetailUl>
            {
                itemList.map((item: string, index: number) => {
                    return (
                        <Link href={`/${item}`} key={index}>
                            <S.MenuDetailLi>{item}</S.MenuDetailLi>
                        </Link>
                    )
                })
            }
            </S.MenuDetailUl>
        </>
    )
};

export default HeaderListItem;