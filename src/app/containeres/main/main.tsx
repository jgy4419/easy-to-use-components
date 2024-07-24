import React from 'react';
import * as S from "./style/main";
import Image from "next/image";
import { mainContent } from '@/app/constants/main';
import profile from "@/app/assets/images/profile.jpeg";
import { useRouter } from 'next/navigation';

const Main = () => {
    const route = useRouter();
    
    return (
        <>
            <S.Container>
                <S.Inner>
                    <S.Content>
                        <S.Title>{ mainContent.title }</S.Title>
                        <S.SubTitle> { mainContent.subTitle } </S.SubTitle>
                        <S.Description> { mainContent.description } </S.Description>
                        <S.Button onClick={() => route.push("/Card")}>Get started!</S.Button>
                    </S.Content>
                    <Image className='logoImg' src={profile} alt="프로필 이미지" width={200} height={200}/>
                </S.Inner>
            </S.Container>
        </>
    );
};

export default Main;