import React from 'react';
import * as S from './style/button3';
import arrow from "./img/arrow.png";
import heart from "./img/heart.png";
import save from "./img/save.png";

const Button3 = () => {
    return (
        <S.Button3Container>
            <S.ButtonContent>
                <S.Button>PLAY</S.Button>
                {
                    [arrow, heart, save].map((img, index) => {
                        return (
                            <S.Button3DImg src={img} key={index}/>
                        )
                    })
                }
            </S.ButtonContent>
        </S.Button3Container>
    );
};

export default Button3;