import React from 'react';
import * as S from "@/app/containeres/main/style/mainSection";
import {mainContent} from "@/app/constants/main";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
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
                    <S.ScrollButton><KeyboardDoubleArrowDownIcon fontSize={"large"}/>Scroll Down!</S.ScrollButton>
                </S.Content>
                <Image className='logoImg' src={profile} alt="프로필 이미지" width={200} height={200}/>
            </S.Inner>
        </div>
    );
};

export default MainSection;