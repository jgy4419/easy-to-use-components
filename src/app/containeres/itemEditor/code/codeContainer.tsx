'use client';
import * as React from 'react';
import {useEffect, useRef} from "react";
import * as S from "./style/codeContainer";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { itemList } from "@/app/constants/componentList";
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import {usePathname} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "@/store/rootReducer";
import {codeStateChange} from "@/store/editor";
import Note from "./note";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
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

export default function CodeContainer() {
    const
        [value, setValue] = React.useState(0),
        codeElement = useRef(null),
        pathNames = usePathname().split("/"),
        dispatch = useDispatch(),
        { codeState } = useSelector((state: RootState) => state.editor);

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

    useEffect(() => {
        Prism.highlightAll();
    }, [value]);

    return (
        <S.Container>
            <S.Inner>
                <Box sx={{ width: '100%', color: "#fff" }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            {
                                Object.keys(codeObj).map((key, index) => {
                                    return (
                                        <Tab key={index} label={key} {...a11yProps(index)} sx={{color: "#fff", fontSize: "16px"}} />
                                    )
                                })
                            }
                        </Tabs>
                    </Box>
                    {
                        Object.keys(codeObj).map((key, index) => {
                            const values: string = codeObj[key as keyof typeof codeObj];

                            return (
                                <CustomTabPanel value={value} index={index} key={index}>
                                    <S.Code>
                                        <code ref={codeElement} className="language-jsx">{values}</code>
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
            </S.BeforeButton>=
            <Note />
        </S.Container>
    );
}
