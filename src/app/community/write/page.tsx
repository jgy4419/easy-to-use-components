"use client";
import React from 'react';
import styled from "styled-components";
import Caution from "@/app/component/caution";
import MessageForm from "@/app/containeres/write/messageForm";

const Page = () => {
    return (
        <Container>
            <Caution />
            <MessageForm/>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100%;
`;

export default Page;
