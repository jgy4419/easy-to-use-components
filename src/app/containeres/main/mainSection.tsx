import React from 'react';
import * as S from "@/app/containeres/main/style/mainSection";
import {mainContent} from "@/app/constants/main";

const MainSection = () => {
    return (
        <S.Container>
            <S.Inner>
                <S.Content>
                    <S.Title>{ mainContent.title }</S.Title>
                    <S.SubTitle> { mainContent.subTitle } </S.SubTitle>
                </S.Content>
                <S.MainDemoContainer>
                    <S.MainDemoBox>
                        <S.MainDemoList>
                            {
                                [1, 2, 3, 4].map((item, index) => {
                                    return (
                                        <S.MainDemoItem key={index}>{item}</S.MainDemoItem>
                                    )
                                })
                            }
                        </S.MainDemoList>
                        <S.MainDemoText>위의 컴포넌트를 사용해보세요.</S.MainDemoText>
                        <S.MainDemoButton>All Demo</S.MainDemoButton>
                    </S.MainDemoBox>
                </S.MainDemoContainer>
                {/*<S.ImgBox>*/}
                {/*    <Image className='logoImg' src={profile} alt="프로필 이미지"/>*/}
                {/*</S.ImgBox>*/}
            </S.Inner>
        </S.Container>
    );
};

export default MainSection;
