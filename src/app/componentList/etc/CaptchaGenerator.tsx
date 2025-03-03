import React, {useEffect, useState} from 'react';
import * as S from './style/CaptchaGenerator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

const CaptchaGenerator = () => {
    const [randomPassword, setRandomPassword] = useState(Math.random().toString(16).substr(2, 7));
    const [captchaGeneratorWriteInputResult, setCaptchaGeneratorWriteInputResult] = useState(
        ''
    );
    const [captchaGeneratorState, setCaptchaGeneratorState] = useState(false);

    const captchaGeneratorWriteInputFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCaptchaGeneratorWriteInputResult(event.target.value);
        console.log(captchaGeneratorWriteInputResult);
    }

    const capthaGeneratorSubmit = () => {
        captchaGeneratorWriteInputResult === randomPassword
            ? setCaptchaGeneratorState(true)
            : setCaptchaGeneratorState(false);
    }

    const mixingCaptchaGenerator = () => {
        setRandomPassword(Math.random().toString(16).substr(2, 7));
    }

    return (
        <S.CaptchaGeneratorContainer>
            <S.CaptchaGeneratorInner>
                <S.CaptchaGenerator>
                    <S.CaptchaGeneratorTitle>Captcha Generator</S.CaptchaGeneratorTitle>
                    <S.CaptchaGeneratorRandomNumber>
                        <S.CaptchaGeneratorRandomNumberResult>{randomPassword}</S.CaptchaGeneratorRandomNumberResult>
                        <S.CaptchaGeneratorRandomNumberButton onClick={mixingCaptchaGenerator}>
                            <FontAwesomeIcon icon={faRotateRight} />
                        </S.CaptchaGeneratorRandomNumberButton>
                    </S.CaptchaGeneratorRandomNumber>
                    <S.CaptchaGeneratorWriteInput onChange={captchaGeneratorWriteInputFunc} placeholder='writing password'/>
                    <S.CaptchaGeneratorResult
                        resultColor={captchaGeneratorState === true ? 'skyblue'
                        : 'red'}
                    >{
                        captchaGeneratorState === true
                            ? 'Success!'
                            :  'Fail..'
                    }</S.CaptchaGeneratorResult>
                    <S.CaptchaGeneratorResultButton onClick={capthaGeneratorSubmit}>Submit Captcha</S.CaptchaGeneratorResultButton>
                </S.CaptchaGenerator>
            </S.CaptchaGeneratorInner>
        </S.CaptchaGeneratorContainer>
    );
};

export default CaptchaGenerator;
