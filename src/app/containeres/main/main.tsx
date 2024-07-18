import React from 'react';
import * as S from "./style/main";
import Cards from '../card/cards';

const Main = () => {
    return (
        <>
            <S.Container>
                <S.Inner>
                    <Cards />
                </S.Inner>
            </S.Container>
        </>
    );
};

export default Main;