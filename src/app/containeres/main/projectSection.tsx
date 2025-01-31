'use client';
import React, {useEffect, useRef, useState} from 'react';
import * as S from "./style/projectSection";
import Image from "next/image";
import {projectSection} from "@/app/constants/main";
import {useRouter} from "next/navigation";

// 컴포넌트 분리하기
const ProjectSection = () => {
    const [selectState, setSelectState] = useState(0);
    const stepButtons = useRef<HTMLUListElement>(null);
    const stepPreView = useRef<HTMLImageElement>(null);

    const images = ["/image/components/main/preview.png", "/image/components/main/edit.png", "/image/components/main/code.png"]

    let [beforeIndex, setBeforeIndex] = useState(0);

    const stepChangeHandle = (selectIndex: number) => {
        const [buttons, preview] = [stepButtons.current, stepPreView.current];

        if(buttons && preview) {
            console.log(beforeIndex, selectIndex);
            (buttons.children[beforeIndex] as HTMLElement).style.background = "none";
            (buttons.children[selectIndex] as HTMLElement).style.background = "#eee";

            preview.style.backgroundImage = `url("${images[selectIndex]}")`;
            // preview.style.backgroundImage = "url()";
        }

        setBeforeIndex(selectIndex);
    }

    useEffect(() => {
        stepChangeHandle(selectState);
    }, [selectState]);

    return (
        <S.Container>
            <S.Inner>
                <S.Title>UI 동작들과 코드를 미리 확인해봐요!</S.Title>
                <S.Description>값이나 이미지를 변경해서 원하는 모양으로 볼 수 있어요.</S.Description>
                <S.StepButtons ref={stepButtons}>
                    {
                        ["화면", "코드", "설명"].map((text, index) => {
                            return (
                                <S.StepButton onClick={() => setSelectState(index)} key={index}>{text}</S.StepButton>
                            )
                        })
                    }
                </S.StepButtons>
                <S.StepPreView ref={stepPreView}/>
                <S.SampleMoreButton>샘플 더 보기</S.SampleMoreButton>
            </S.Inner>
        </S.Container>
    );
};

export default ProjectSection;
