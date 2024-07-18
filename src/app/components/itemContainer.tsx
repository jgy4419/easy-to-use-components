import React from 'react';
import * as S from "./style/itemContainer";
import Image from "next/image";

const ItemContainer = ({ image }: any) => {
    return (
        <S.Container>
            <Image className='itemImage' src={image} alt="이미지" />
            <S.HoverContainer>
                <S.HoverInner>
                    <S.Button>Detail</S.Button>
                </S.HoverInner>
            </S.HoverContainer>
        </S.Container>
    );
};

export default ItemContainer;