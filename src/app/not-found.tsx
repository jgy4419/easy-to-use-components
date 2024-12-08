"use client";
import React from 'react';
import styled from "styled-components";

const NotFound = () => {
    return (
        <Container>
            <h1>404 페이지 입니다.</h1>
            <p>잘못된 접근입니다. URL을 다시 한 번 확인해주세요!</p>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    height: calc(100% - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default NotFound;