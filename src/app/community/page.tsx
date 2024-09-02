'use client';
import styled from "styled-components";
import Search from "@/app/containeres/community/search";
import List from "@/app/containeres/community/list";
import Caution from "@/app/components/caution";

const Page = () => {
    return (
        <Container>
            <Caution />
            <Search/>
            <List />
        </Container>
    );
};

const Container = styled.main`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export default Page;