"use client";

import React, { useEffect, useState, useRef, useCallback } from 'react';
import * as S from "./style/list";
import ListItem from "@/app/containeres/community/listItem";
import { tableHead } from "@/app/constants/caution";
import { ICommunity } from "./type/type";
import { apiGet } from '@/app/util/apiModule';
import { community } from '@/app/constants/errorMessage';

const List = () => {
    const [communityData, setCommunityData] = useState<ICommunity[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef<null | HTMLDivElement>(null);

    const getCommunityData = async (page: number) => {
        setLoading(true);
        const data = await apiGet(`community?page=${page}&limit=10`, community.postList);
        
        if(data.length === 0) {
            return;
        }
        
        setCommunityData(prev => [...prev, ...data]);
        setLoading(false);
    }

    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if(target.isIntersecting && !loading) {
            setPage(prev => prev + 1);
        }
    }, [loading]);

    useEffect(() => {
        getCommunityData(page);
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {threshold: 1.0});
        if(observerRef.current) observer.observe(observerRef.current);

        return () => {
            if(observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [handleObserver]);

    return (
        <S.Container>
            {
                <S.Table>
                    <S.Head>
                        <S.HeadRow>
                            {tableHead.map((list, index) => (
                                <S.HeadItem key={index}>{list}</S.HeadItem>
                            ))}
                        </S.HeadRow>
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
            <div ref={observerRef} style={{ height: "1px" }} />
        </S.Container>
    );
};

export default List;