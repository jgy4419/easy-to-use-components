'use client';
import * as React from 'react';
import { useEffect, useRef, useState } from "react";
import * as S from "./style/codeContainer";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { itemList } from "@/app/constants/componentList";
import Prism from 'prismjs';
import {usePathname} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "@/store/rootReducer";
import {codeStateChange} from "@/store/editor";
import 'prismjs/components/prism-jsx.min';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface ICodeObj {
    fileName: string,
    code: string
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CodeContainer({ data }: any) {
    const
        [value, setValue] = React.useState(0),
        codeElement = useRef(null),
        pathNames = usePathname().split("/"),
        dispatch = useDispatch(),
        { codeState } = useSelector((state: RootState) => state.editor),
        [codeObj2, setCodeObj2] = useState<ICodeObj[]>([]);

    // TODO :  Card, card1 까지는 props나 redux 사용해서 가져오기
    const main = itemList[pathNames[1] as keyof typeof itemList];
    // const detail = itemList[pathNames[2] as keyof typeof itemList];
    const detail = main[pathNames[2] as keyof typeof main];
    const codeObj = detail["code" as keyof typeof detail];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const copyClickHandler = () => {
        const codeElem = codeElement.current;

        // text 복사
        codeElem?.textContent &&
            navigator.clipboard.writeText(codeElem.textContent).then(function() {
                alert("복사되었습니다!");
            }).catch(function(error) {
                console.error("복사도중 에러가 발생했습니다.: ", error);
            });
    }

    const fileNameChangeHandler = (fileType: string): string => {
        if(fileType === "script") {
            return data.fileName + `.${data.language}x`;
        } else {
            return data.fileName + `.${data.language}`;
        }
    }

    // db 값 중 jsx,tsx, 값들 배열에 담아주기
    const addCodeValue = () => {
        console.log("addCodeValue", data);

        Object.keys(data).forEach((item) => {
            if(/^script|style/.test(item)) {
                const codeArr = [
                    {
                        fileName: fileNameChangeHandler(item),
                        code: data[item]
                    }
                ]
                setCodeObj2(prev => [...prev, ...codeArr]);
            }
        });

        console.log("codeObj2", codeObj2);
        
    }

    useEffect(() => {
        Prism.highlightAll();
        addCodeValue();

        // unmount 될 때 배열 초기화
        return () => {
            setCodeObj2([]);
        }
    }, [value]);

    return (
        <S.Container>
            <S.Inner>
                <Box sx={{ width: '100%', color: "#fff" }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            {
                                codeObj2.map((item, index) => {
                                    return (
                                        <Tab key={index} label={item.fileName} {...a11yProps(index)} sx={{color: "#fff", fontSize: "16px"}} />
                                    )
                                })
                            }
                        </Tabs>
                    </Box>
                    {
                        codeObj2.map((item, index) => {
                            return (
                                <CustomTabPanel value={value} index={index} key={index}>
                                    <S.Code>
                                        <code ref={codeElement} className="language-jsx">{item.code}</code>
                                    </S.Code>
                                </CustomTabPanel>
                            )
                        })
                    }
                </Box>
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
