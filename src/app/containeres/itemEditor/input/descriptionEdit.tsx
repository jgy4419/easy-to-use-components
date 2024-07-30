import React from 'react';
import * as S from "./style/description"
import {inputTextChangeHandler} from "@/app/util/inputTextChange";

const DescriptionEdit = ({ name }: { name: string}) => {
    return (
        <S.Description onChange={(event) => inputTextChangeHandler(event, name)} placeholder="some description about this card and it's ourpose." />
    );
};

export default DescriptionEdit;