"use client";
import { useState } from 'react';
import * as S from './style/Card5';

const Card5 = () => {
    const [card7Content, setCard7Content] = useState({
        title: ['Korea', 'China', 'Japan', 'Spain', 'USA'],
        description: 'Image description here.',
        image: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjG8BvmlQDx6R17LNuzaYKZPCky3-1TTiEGQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3E6uKOY_m_ZMS4c1TJYZeEMmJccCOip08u2XoNcWTJaE6Opm3ZKgSdO726FiuYbEFD4&usqp=CAU',
            'https://img.freepik.com/free-vector/gradient-pastel-sky-background_52683-60514.jpg',
            'https://png.pngtree.com/thumb_back/fw800/background/20210625/pngtree-watercolor-landscape-computer-desktop-wallpaper-abstract-background-image_733325.jpg',
            'https://image.kmib.co.kr/online_image/2017/1128/611311110011938257_1.jpg'
        ]
    });
    return (
        <S.Card7Container>
            <S.Card7Inner>
                {
                    card7Content.title.map((item, index) => {
                        return (
                            <S.Card7Content key={index} backImage={card7Content.image[index]}>
                                <S.Card7ContentDetail>
                                    <S.Card7ContentTitle>{item}</S.Card7ContentTitle>
                                    <S.Card7ContentDescription>{card7Content.description}</S.Card7ContentDescription>
                                </S.Card7ContentDetail>
                            </S.Card7Content>
                        )
                    })
                }
            </S.Card7Inner>
        </S.Card7Container>
    );
};

export default Card5;
