import React from 'react';
import * as S from "./style/main";
import MainSection from "@/app/containeres/main/mainSection";
import ProjectSection from "@/app/containeres/main/projectSection";
import Contact from './contact';

const Main = () => {
    return (
        <>
            <S.Container>
                <MainSection />
                <ProjectSection />
                <Contact />
            </S.Container>
        </>
    );
};

export default Main;
