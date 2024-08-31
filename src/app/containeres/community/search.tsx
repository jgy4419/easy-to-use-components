import React from 'react';
import * as S from "./style/search";
import { useRouter } from "next/navigation";

const Search = () => {
    const router = useRouter();

    const postClickHandler = () => {
        router.push("community/write");
    }

    return (
        <S.SearchContainer>
            <S.CreatePost onClick={postClickHandler}>Create Post</S.CreatePost>
            <S.SearchWrapper>
                <S.SearchInput placeholder="검색 내용을 입력해주세요."/>
                <S.SearchButton></S.SearchButton>
            </S.SearchWrapper>
        </S.SearchContainer>
    );
};

export default Search;