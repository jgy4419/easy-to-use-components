'use client';
import React, {useState} from 'react';
import * as S from "./style/projectSection";
import Image from "next/image";
import {projectSection} from "@/app/constants/main";
import {useRouter} from "next/navigation";

// 컴포넌트 분리하기
const ProjectSection = () => {
    const {imgContent, content} = projectSection;
    const [imageButtonIndex, setImageButtonIndex] = useState(1);
    const route = useRouter();

    return (
        <S.Container>
            <S.Inner>
                <S.ImgContent>
                    <S.ImgTitle>{imgContent.title}</S.ImgTitle>
                    <S.ImgZip>
                        {
                            imgContent.img.map((img, index) => {
                                return (
                                    <S.Img key={index} index={imageButtonIndex}>
                                        <Image src={img} alt="이미지" width={200}/>
                                    </S.Img>
                                )
                            })
                        }
                    </S.ImgZip>
                    <S.ImgButtons>
                    {
                        imgContent.img.map((_, index) => {
                            return (
                                <S.ImgButton
                                    onClick={() => setImageButtonIndex(index + 1)}
                                    index={imageButtonIndex} key={index}
                                />
                            )
                        })
                    }
                    </S.ImgButtons>
                </S.ImgContent>
                <S.Content>
                    <S.Title>{content.title}</S.Title>
                    <S.Description>{content.description}</S.Description>
                    <S.Button onClick={() => route.push("/component/All")}>{content.button}</S.Button>
                </S.Content>
            </S.Inner>
        </S.Container>
    );
};

export default ProjectSection;