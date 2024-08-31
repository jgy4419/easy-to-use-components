import React from 'react';
import * as S from "./style/caution";
import { cautionList, content } from "@/app/constants/caution";

const Caution = () => {
    return (
        <S.Container>
            <S.Inner>
                <S.Title>{content.title}</S.Title>
                <S.SubTitle>{content.subTitle}</S.SubTitle>
                <S.Cautions>
                    {
                        cautionList.map((caution, index) => {
                            return (
                                <S.Caution key={index}>{caution}</S.Caution>
                            )
                        })
                    }
                </S.Cautions>
            </S.Inner>
        </S.Container>
    );
};

export default Caution;