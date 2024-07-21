import React from 'react';
import * as S from "./style/card1";

const Card1 = () => {
    return (
        <S.Card1Container>
            <S.Card1Inner>
                <S.Card1Content>
                    <S.DarkBackGround/>
                    <S.Card1MainText>Some title</S.Card1MainText>
                    <S.Card1SubText>some description about this card and it's ourpose.</S.Card1SubText>
                </S.Card1Content>
            </S.Card1Inner>
        </S.Card1Container>
    );
};

export default Card1;