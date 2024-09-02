"use client";

import React, { useEffect, useState } from 'react';
import * as S from "./style/list";
import { tableHead } from "@/app/constants/caution";
import ListItem from "@/app/containeres/community/listItem";
import { ICommunity } from "./type/type";

const List = () => {
    const [isClient, setIsClient] = useState(false);

    const [communityData, setCommunityData] = useState<ICommunity[]>([]);

    useEffect(() => {
        getCommunityData();
    }, []);

    const getCommunityData = async () => {
        try {
            const response = await fetch("/api/community");

            if(!response.ok) {
                throw new Error("게시글들을 불러오는데 실패했습니다.");
                
            }
            const data = await response.json();

            console.log(data);
            setCommunityData(data);

        } catch(err) {
            console.log("데이터를 불러오는데 실패했습니다." + err);
        }
    }

    // useEffect(() => {
        // testData !== null && setIsClient(true);
    // }, []);

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