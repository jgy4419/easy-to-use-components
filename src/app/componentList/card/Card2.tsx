import React, {useState} from 'react';
import * as S from './style/Card2';

const Card2 = () => {
    const [content, useContent] = useState({
        mainTitle: 'Pepsi',
        subTitle: 'Zero Sugar',
        description: 'Peppsi Zero Sugar is the only soda with zero calories and maximum pepsi taste!',
        button: 'Buy Now',
        img: 'https://www.pepsi.com/en-us/uploads/images/can-pzs.png'
    });
    return (
        <>
            <S.Item>
                <S.Content>
                    <S.MainTitle>{content.mainTitle}</S.MainTitle>
                    <S.SubTitle>{content.subTitle}</S.SubTitle>
                    <S.Description>{content.description}</S.Description>
                    <S.Button>{content.button}</S.Button>
                </S.Content>
                <S.ItemImage src={content.img}/>
            </S.Item>
        </>
    );
};

export default Card2;
