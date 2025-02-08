import React, {useState} from 'react';
import * as S from './style/Button2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faComment } from '@fortawesome/free-solid-svg-icons';

const Button2 = () => {
    const [buttons, setButtons] = useState([
        faHouse, faUser, faComment
    ]);
    return (
        <S.Button2Container>
            <S.Button2Inner>
                <S.Buttons>
                    {
                        buttons.map((button, index) => {
                            return (
                                <S.Button key={index}>
                                    <S.IconContain>
                                        <FontAwesomeIcon icon={button} />
                                    </S.IconContain>
                                </S.Button>
                            )
                        })
                    }
                </S.Buttons>
            </S.Button2Inner>
        </S.Button2Container>
    );
};

export default Button2;
