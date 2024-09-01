"use client";

import React, {useEffect, useState} from 'react';
import * as S from "./style/list";
import { tableHead } from "@/app/constants/caution";
import ListItem from "@/app/containeres/community/listItem";

const List = () => {
    const [testData, setTestData] = useState([
        {
            idx: 1,
            title: "제목이에용",
            date: "2024 / 07 / 31"
        },
        {
            idx: 2,
            title: "제목이에용2",
            date: "2024 / 08 / 31"
        },
        {
            idx: 3,
            title: "제목이에용3",
            date: "2024 / 05 / 31"
        }
    ]);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        testData !== null && setIsClient(true);
    }, []);

    return (
        <S.Container>
            {
                isClient
                    ? <S.Table>
                        <S.Head>
                            {
                                tableHead.map((list, index) => {
                                    return (
                                        <S.HeadItem key={index}>{list}</S.HeadItem>
                                    )
                                })
                            }
                        </S.Head>
                        <S.Body>
                            {
                                testData.map((data, index) => {
                                    return (
                                        <ListItem
                                            key={data.idx} 
                                            data={data}
                                        />
                                    )
                                })
                            }
                        </S.Body>
                    </S.Table>
                    : <>문의 내역이 없습니다!</>
            }

        </S.Container>
    );
};

export default List;