'use client';
import React, {useEffect, useState} from 'react';
import { useRouter } from "next/navigation";
import * as S from "@/app/containeres/community/style/list";
import { ICommunity } from './type/type';

const ListItem = ({data}: { data: ICommunity }) => {
    const router = useRouter();
    return (
        <>
            <S.BodyList onClick={() => router.push("community/" + data.idx)}>
                <S.BodyItem>{data.idx}</S.BodyItem>
                <S.BodyItem>{data.title}</S.BodyItem>
                <S.BodyItem>{data.date}</S.BodyItem>
            </S.BodyList>
        </>
    );
};

export default ListItem;