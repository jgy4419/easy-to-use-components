'use client';
import React from 'react';
import styled from 'styled-components';
import Caution from '@/app/components/caution';
import PostDetail from '@/app/containeres/community/postDetail/postDetail';


const Page = () => {
    return (
        <Container >
            <Caution />
            <PostDetail />
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: auto;
`;

export default Page;