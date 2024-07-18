import React from 'react';
import * as S from "./style/cards";
import ItemContainer from '@/app/components/itemContainer';
// import Card1 from './card1';
import Card1 from "../image/card/card1.png";

const Cards = () => {
    // const cardList = [Card1, Card1, Card1, Card1, Card1];
    const imgList = [Card1, Card1, Card1, Card1];

    return (
        <S.Container>
            <S.Items>
                {
                    imgList.map((img, index) => {
                        return (
                            <>
                                <ItemContainer key={index} image={img}/>
                            </>
                        )
                    })
                }
            </S.Items>
        </S.Container>
    );
};

export default Cards;