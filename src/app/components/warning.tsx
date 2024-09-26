import React, { useEffect } from 'react';
import * as S from "./style/warning";

const Warning = ({ note }: { note: string }) => {
    useEffect(() => {
        console.log(note);
        
    }, []);
    return (
        <S.WarningIcon>
            <S.WarningDetail>{note}</S.WarningDetail>
        </S.WarningIcon>
    );
};

export default Warning;