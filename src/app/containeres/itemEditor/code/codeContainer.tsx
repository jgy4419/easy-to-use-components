'use client';
import * as React from 'react';
import * as S from "./style/codeContainer";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { itemList } from "@/app/constants/componentList";

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
    const [value, setValue] = React.useState(0);
    // TODO :  Card, card1 까지는 props나 redux 사용해서 가져오기
    const { Card } = itemList;
    const cardObjValue: {jsx: string, style: string} = Card.card1.code;

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <S.Container>
            <S.Inner>
                <Box sx={{ width: '100%', color: "#fff" }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            {/*<Tab label="123" {...a11yProps(0)} sx={{color: "#fff", fontSize: "25px"}} />*/}
                            {/*<Tab label="345" {...a11yProps(1)} sx={{color: "#fff", fontSize: "25px"}} />*/}
                            {
                                Object.keys(Card.card1.code).map((key, index) => {
                                    return (
                                        <Tab key={index} label={key} {...a11yProps(index)} sx={{color: "#fff", fontSize: "25px"}} />
                                    )
                                })
                            }
                        </Tabs>
                    </Box>
                    {
                        Object.keys(Card.card1.code).map((key, index) => {
                            const values: string = cardObjValue[key as keyof {jsx: string, style: string}];
                            console.log('value', value);
                            return (
                                <CustomTabPanel value={value} index={index} key={index}>
                                    <pre>
                                        {values}
                                    </pre>
                                </CustomTabPanel>
                            )
                        })
                    }
                </Box>
            </S.Inner>
        </S.Container>
    );
}
