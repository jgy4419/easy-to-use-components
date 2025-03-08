"use client";
import React, {useState} from 'react';
import * as S from './style/Card6';

// Poster Animation
const Card10 = () => {
    const [posterContent, setPosterContent] = useState({
        title: "Location Unknown",
        subTitle: "2021 PG Thr 38min",
        hashTag: ['Italian', 'Drama', 'Indie'],
        description: 'Marco, a disillusioned backpocker in his late 20s, embarks on a solitary journey in search for meaning.',
        castImg: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjG8BvmlQDx6R17LNuzaYKZPCky3-1TTiEGQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3E6uKOY_m_ZMS4c1TJYZeEMmJccCOip08u2XoNcWTJaE6Opm3ZKgSdO726FiuYbEFD4&usqp=CAU',
            'https://img.freepik.com/free-vector/gradient-pastel-sky-background_52683-60514.jpg'
        ],
        mainImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjG8BvmlQDx6R17LNuzaYKZPCky3-1TTiEGQ&s'
    });
    return (
        <S.Card10Container>
            <S.Card10Inner>
                <S.PosterContainer>
                    <S.PosterMainImg src={posterContent.mainImg}/>
                    <S.PosterContentBackBlurColor/>
                    <S.PosterContent>
                        <S.PosterTitle>{posterContent.title}</S.PosterTitle>
                        <S.PosterSubTitle>{posterContent.subTitle}</S.PosterSubTitle>
                        <S.PosterHashTags>
                            {
                                posterContent.hashTag.map((hashTag, index) => {
                                    return (
                                        <S.PosterHashTag key={index}>{hashTag}</S.PosterHashTag>
                                    )
                                })
                            }
                        </S.PosterHashTags>
                        <S.PosterDescription>{posterContent.description}</S.PosterDescription>
                        <S.PosterCastTitle>Cast</S.PosterCastTitle>
                        <S.PosterCasts>
                            {
                                posterContent.castImg.map((castImg, index) => {
                                    return (
                                        <S.PosterCast src={castImg} key={index}/>
                                    )
                                })
                            }
                        </S.PosterCasts>
                    </S.PosterContent>
                </S.PosterContainer>
            </S.Card10Inner>
        </S.Card10Container>
    );
};

export default Card10;
