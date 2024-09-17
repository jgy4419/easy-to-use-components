"use client";

import React, { useEffect, useState } from 'react';
import * as S from "./style/list";
import { tableHead } from "@/app/constants/caution";
import ListItem from "@/app/containeres/community/listItem";
import { ICommunity } from "./type/type";
import { apiGet } from '@/app/util/apiModule';
import { community } from '@/app/constants/errorMessage';

const List = () => {
    const [communityData, setCommunityData] = useState<ICommunity[]>([]);

    useEffect(() => {
        getCommunityData();
    }, []);

    const getCommunityData = async () => {
        const data = await apiGet("community", community.postList);
        setCommunityData(data);
    }

    return (
        <S.Container>
            {
                <S.Table>
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
                            communityData.map((data: ICommunity, index: number) => {
                                return (
                                    <ListItem
                                        key={index} 
                                        data={data}
                                    />
                                )
                            })
                        }
                    </S.Body>
                </S.Table>
            }

        </S.Container>
    );
};

export default List;