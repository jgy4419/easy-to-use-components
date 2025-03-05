'use client';
import React, { useEffect, useRef, useState } from "react";
import * as S from "./style/codeContainer";
import Prism from 'prismjs';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { codeStateChange } from "@/store/editor";
import 'prismjs/components/prism-jsx.min';
import useGithubCodeToText from "@/app/component/hooks/useGithubCodeToText";

interface ICodeObj {
    fileName: string,
    code: string
}

const CodeContainer = ({ data }: any) => {
    const
        codeElement = useRef<HTMLDivElement>(null),
        dispatch = useDispatch(),
        { codeState } = useSelector((state: RootState) => state.editor),
        [codeObj, setCodeObj] = useState<ICodeObj[]>([]),
        [tabIdx, setTabIdx] = useState(0),
        { getCode } = useGithubCodeToText();

    // 소스코드 가져오는 함수
    const fetchCode = async () => {
        try {
            const [jsCode, styleCode] = await Promise.all([
                getCode(data.jsPath),
                getCode(data.stylePath)
            ]);

            // TODO : fileName 불러오도록 수정
            setCodeObj([
                { fileName: "card1.tsx", code: String(jsCode) },
                { fileName: "card1.ts", code: String(styleCode) }
            ]);
        } catch(error) {
            console.error("코드 불러오기 실패:", error);
        }
    }

    useEffect(() => {
        fetchCode().then(() => {
            Prism.highlightAll();
            addCodeValue();
        })
    }, [tabIdx]);

    const copyClickHandler = () => {
        const codeElem = codeElement.current;
    
        // codeElem이 null이 아닌 경우에만 진행
        if (codeElem && codeElem.textContent) {
            navigator.clipboard.writeText(codeElem.textContent)
                .then(() => {
                    alert("복사되었습니다!");
                })
                .catch((error) => {
                    console.error("복사 도중 에러가 발생했습니다: ", error);
                });
        } else {
            console.error("codeElem이 null이거나 textContent가 없습니다.");
        }
    };
    

    const fileNameChangeHandler = (fileType: string): string => {
        if(fileType === "script") {
            return data.componentName + `.${data.language}x`;
        } else {
            return data.componentName + `.${data.language}`;
        }
        // if(fileType === "script") {
        //     return data.componentName + `.${data.language}x`;
        // } else {
        //     return data.componentName + `.${data.language}`;
        // }
    }

    // db 값 중 jsx,tsx, 값들 배열에 담아주기
    const addCodeValue = () => {
        // Object.keys(data).forEach((item) => {
        //     if(/^script|style/.test(item)) {
        //         const codeArr = [
        //             {
        //                 fileName: fileNameChangeHandler(item),
        //                 code: data[item]
        //             }
        //         ];
        //         setCodeObj(prev => [...prev, ...codeArr]);
        //     }
        // });
    }

    // useEffect(() => {
    //     Prism.highlightAll();
    //     addCodeValue();
    //
    //     // unmount 될 때 배열 초기화
    //     // return () => {
    //     //     setCodeObj([]);
    //     // }
    // }, [tabIdx]);

    const tabChangeHandler = (idx: number) => {
        setTabIdx(idx);
    }

    return (
        <S.Container>
            <S.Inner>
                <S.Tabs>
                    {
                        codeObj.map((item, index) => {
                            return (
                                <S.Tab 
                                    key={index}
                                    onClick={() => tabChangeHandler(index)}
                                >
                                        {item.fileName}
                                </S.Tab>
                            )
                        })
                    }
                </S.Tabs>
                <S.Code>
                    <code ref={codeElement} className="language-jsx">{codeObj[tabIdx] && codeObj[tabIdx].code}</code>    
                </S.Code>
            </S.Inner>
            <S.CopyButton onClick={copyClickHandler} className="defaultButton">Copy</S.CopyButton>
            <S.BeforeButton
                onClick={() => dispatch(codeStateChange(!codeState))}
                className="defaultButton">
                Before
            </S.BeforeButton>
        </S.Container>
    );
}


export default CodeContainer;