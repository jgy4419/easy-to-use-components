import React from 'react';
import * as S from "@/app/containeres/itemEditor/style/editor";
import {inputFileChangeHandler} from "@/app/util/inputFileChange";

const FileEdit = ({ name, type }: {name: string, type: string}) => {
    return (
        <>
            <S.File type="file" id="imgFile" onChange={(event) => inputFileChangeHandler(event, name, type)} />
            <S.FileStyle htmlFor="imgFile">파일 적용하기</S.FileStyle>
        </>
    );
};

export default FileEdit;