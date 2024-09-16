"use client";
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Caution from "@/app/components/caution";
import MessageForm from "@/app/containeres/write/messageForm";
import { useRouter, usePathname } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const path = usePathname();
    const [postIndex, setPostIndex] = useState<string | -1>(-1);

    // custom hook으로 빼주기
    useEffect(() => {
        const match = path.match(/\/(\d+)$/);
        const idx = match ? match[1] : -1;

        setPostIndex(idx);
    }, []);

    return (
        <Container>
            <Caution />
            <MessageForm postIndex={postIndex}/>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 100vw;
`;

export default Page;