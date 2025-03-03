import CategoryList from '@/app/component/categoryList';
import React from 'react';
import styled from "styled-components";

const NoItems = ({ item }: {item: string}) => {
    return (
        <NoItemContainer>
            <CategoryList />
            <Title>{item} 컴포넌트들이 아직 준비되어 있지 않습니다.</Title>
        </NoItemContainer>
    );
};

const NoItemContainer = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    
`;

const Title = styled.h3`
    margin-top: 20%;
`;

export default NoItems;
