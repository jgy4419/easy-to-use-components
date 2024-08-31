import React from 'react';
import * as S from "./style/main";
import MainSection from "@/app/containeres/main/mainSection";
import ProjectSection from "@/app/containeres/main/projectSection";

const Main = () => {
    return (
        <>
            <S.Container>
                <MainSection />
            </S.Container>
            <ProjectSection />
        </>
    );
};

export default Main;