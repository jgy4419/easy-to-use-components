'use client';
import React, {useState} from 'react';
import * as S from "./style/card1";

const Card1 = () => {
    const [content, setContent] = useState({
        title: "Some title",
        description: "some description about this card and it's ourpose."
    });

    return (
        <S.Card1Container>
            <S.Card1Inner>
                <S.Card1Content>
                    <S.DarkBackGround/>
                    <S.Card1MainText>{content.title}</S.Card1MainText>
                    <S.Card1SubText>{content.description}</S.Card1SubText>
                </S.Card1Content>
            </S.Card1Inner>
        </S.Card1Container>
    );
};

export default Card1;