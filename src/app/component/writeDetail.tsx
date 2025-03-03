"use client";
import styled from "styled-components";
import Caution from "@/app/component/caution";
import MessageForm from "@/app/containeres/write/messageForm";

const WriteDetail = () => {
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
`;

export default WriteDetail;
