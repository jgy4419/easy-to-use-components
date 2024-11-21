'use client';
import styled from "styled-components";
import Search from "@/app/containeres/community/search";
import List from "@/app/containeres/community/list";
import Caution from "@/app/components/caution";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    
    const postClickHandler = () => {
        router.push("community/write");
    }

    return (
        <Container>
            <Caution />
            <Inner>
                <CreatePost onClick={postClickHandler}>Create Post</CreatePost>
                <SearchContainer>
                    <Search state={"community"}/>
                </SearchContainer>
            </Inner>
            <List />
        </Container>
    );
};

const Container = styled.main`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

const Inner = styled.div`
`;

export const CreatePost = styled.div`
    position: absolute;
    z-index: 9999;
    left: 15%;
    font-weight: 700;
    cursor: pointer;
    padding: 15px 30px;
    background-color: rgb(15,18,20);
    border: 2px solid rgb(15,18,20);
    transition: .3s;
    border-radius: 10px;
    &:hover {
        border: 2px solid #1b6ca2;
    }
    &:active {
        background: #1b6ca2;
    }
`;

const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    & main {
        position: absolute;
        right: 0;
    }
`;

export default Page;