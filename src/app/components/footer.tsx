"use client";
import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <Inner>
                <span>© 2024 개발자 jgy_98</span>
                <span>Contact jgy_98@naver.com</span>
            </Inner>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    text-align: center;
    width: 100vw;
    height: 7%;
    background-color: rgb(15,18,20);
    font-size: 16px;
    font-weight: 700;
`;

const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export default Footer;