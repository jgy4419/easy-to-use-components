import React, { useState } from 'react';
import * as S from './style/Card7';

const Card9 = () => {
    const [content, setContent] = useState({
        title: ['The City', 'The Beach'],
        description: "some description about this card and it's ourpose.",
        backImage: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjG8BvmlQDx6R17LNuzaYKZPCky3-1TTiEGQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3E6uKOY_m_ZMS4c1TJYZeEMmJccCOip08u2XoNcWTJaE6Opm3ZKgSdO726FiuYbEFD4&usqp=CAU',
        ]
    });
    return (
        <S.Card9Container>
            <S.Card9Inner>
                {
                    content.title.map((title, index) => {
                        return (
                            <S.Card9Content
                                style={{backgroundImage: `url('${content.backImage[index]}')`}}
                                key={index}>
                                {/* 검정색 배경 */}
                                <S.Card9ContentTopBack/>
                                <S.Card9ContentBottomBack/>
                                <S.Card9ContentInner>
                                    <S.Card9ContentTitle>{title}</S.Card9ContentTitle>
                                    <S.Card9ContentDescription>{content.description}</S.Card9ContentDescription>
                                </S.Card9ContentInner>
                            </S.Card9Content>
                        )
                    })
                }
            </S.Card9Inner>
        </S.Card9Container>
    );
};

export default Card9;
