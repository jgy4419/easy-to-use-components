import React, { useRef } from 'react';
import * as S from "./style/search";
import { useRouter } from "next/navigation";
import Icon from '@/app/components/iconBox';
import useSearch from '@/app/components/hooks/useSearch';

const Search = () => {
    const { searchFilter } = useSearch("community");
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const postClickHandler = () => {
        router.push("community/write");
    }

    return (
        <S.SearchContainer>
            <S.CreatePost onClick={postClickHandler}>Create Post</S.CreatePost>
            <S.SearchWrapper>
                <S.SearchInput ref={searchRef} placeholder="검색 내용을 입력해주세요."/>
                <S.IconContainer onClick={() => searchFilter(searchRef.current?.value || "")}>
                    <Icon width={40} height={40} iconName="faMagnifyingGlass"/>
                </S.IconContainer>
            </S.SearchWrapper>
        </S.SearchContainer>
    );
};

export default Search;