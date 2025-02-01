import React from 'react';
import * as S from "@/app/containeres/main/style/mainSection";
import {mainContent, demoImages} from "@/app/constants/main";

const MainSection = () => {

    return (
        <S.Container>
            <S.Inner>
                <S.Content>
                    <S.Title>{ mainContent.title }</S.Title>
                    <S.SubTitle><S.BackColorText>무료!!!</S.BackColorText> { mainContent.subTitle } </S.SubTitle>
                </S.Content>
                <S.MainDemoContainer>
                    <S.MainDemoBox>
                        <S.MainDemoList>
                            {
                                demoImages.map((item, index) => {
                                    return (
                                        <S.MainDemoItem img={item} key={index} />
                                    )
                                })
                            }
                        </S.MainDemoList>
                        <S.MainDemoText>위의 컴포넌트를 사용해보세요.</S.MainDemoText>
                        <S.MainDemoButton>All Demo</S.MainDemoButton>
                    </S.MainDemoBox>
                </S.MainDemoContainer>
            </S.Inner>
        </S.Container>
    );
};

export default MainSection;
