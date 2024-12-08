import React from 'react';
import * as S from "@/app/containeres/main/style/mainSection";
import {mainContent} from "@/app/constants/main";
import Image from "next/image";
import profile from "@/app/assets/images/profile.jpeg";

const MainSection = () => {
    return (
        <div>
            <S.Inner>
                <S.Content>
                    <S.Title>{ mainContent.title }</S.Title>
                    <S.SubTitle> { mainContent.subTitle } </S.SubTitle>
                    <S.Description> { mainContent.description } </S.Description>
                    <S.ScrollButton>Scroll Down!</S.ScrollButton>
                </S.Content>
                <S.ImgBox>
                    <Image className='logoImg' src={profile} alt="프로필 이미지"/>
                </S.ImgBox>
            </S.Inner>
        </div>
    );
};

export default MainSection;