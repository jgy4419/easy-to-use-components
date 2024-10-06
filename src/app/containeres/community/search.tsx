import React from 'react';
import * as S from "./style/search";
import { useRouter } from "next/navigation";
import Icon from '@/app/components/iconBox';

{/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}

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
                <S.IconContainer>
                    <Icon width={40} height={40} iconName="faMagnifyingGlass"/>
                </S.IconContainer>
            </S.SearchWrapper>
        </S.SearchContainer>
    );
};

export default Search;