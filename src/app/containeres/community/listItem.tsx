'use client';
import React, {useEffect, useState} from 'react';
import * as S from "@/app/containeres/community/style/list";

const ListItem = ({data}: {idx: number, title: string, date: string}) => {
    return (
        <>
            <S.BodyList>
                <S.BodyItem>{data.idx}</S.BodyItem>
                <S.BodyItem>{data.title}</S.BodyItem>
                <S.BodyItem>{data.date}</S.BodyItem>
            </S.BodyList>
        </>
    );
};

export default ListItem;