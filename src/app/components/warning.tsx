import React from 'react';
import * as S from "./style/warning";

const Warning = ({ note }: { note: string }) => {
    return (
        <S.WarningIcon>
            <S.WarningDetail>{note}</S.WarningDetail>
        </S.WarningIcon>
    );
};

export default Warning;