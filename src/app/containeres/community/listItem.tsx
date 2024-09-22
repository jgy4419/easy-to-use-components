'use client';
import React from 'react';
import { useRouter } from "next/navigation";
import * as S from "@/app/containeres/community/style/list";
import { ICommunity } from './type/type';

const ListItem = ({data}: { data: ICommunity }) => {
    const router = useRouter();

    console.log(data);
    return (
        <>
            <S.BodyList onClick={() => router.push("community/" + data.idx)}>
                <S.BodyItem>{data.idx}</S.BodyItem>
                <S.BodyItem>{data.title}</S.BodyItem>
                <S.BodyItem>{data.date.split('T')[0]}</S.BodyItem>
            </S.BodyList>
        </>
    );
};

export default ListItem;