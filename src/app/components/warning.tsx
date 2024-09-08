import React from 'react';
import * as S from "./style/warning";

const Warning = () => {
    return (
        <S.WarningIcon>
            <S.WarningDetail>주의사항이 담긴 내용</S.WarningDetail>
        </S.WarningIcon>
    );
};

export default Warning;