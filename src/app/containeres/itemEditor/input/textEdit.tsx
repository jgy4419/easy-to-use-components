import React from 'react';
import * as S from "./style/textEdit";
import {inputTextChangeHandler} from "@/app/util/inputTextChange";

/* 필요한 데이터
* 기존 text 값
* className 이름
*/
const TextEdit = ({ name }: {name: string}) => {
    return (
        <>
            <S.Title onChange={(event) => inputTextChangeHandler(event, name)} placeholder='Some title' type="text" />
        </>
    );
};

export default TextEdit;
