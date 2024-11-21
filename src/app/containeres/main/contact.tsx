import React from 'react';
import * as S from "./style/contact";
import IconBox from '@/app/components/iconBox';

const Contact = () => {
    return (
        <S.Container>
            <S.Inner>
                <S.Title>CONTACT ✉️ 💌</S.Title>
                <S.Description>Thank you! 😁</S.Description>
                <S.GithubUrl>
                    <IconBox width={40} height={40} iconName="faGithub"/>
                    <a href='https://github.com/jgy4419'>https://github.com/jgy4419</a>
                </S.GithubUrl>
                <S.InstamUrl>
                    <IconBox width={40} height={40} iconName="faInstagram"/>
                    <a href='https://www.instagram.com/jgy_98'>https://www.instagram.com/jgy_98/</a>
                </S.InstamUrl>
                <S.ContactForm>
                    <S.NameInput placeholder="Name"></S.NameInput>
                    <S.TitleInput placeholder="Title"></S.TitleInput>
                    <S.MessageArea placeholder="Description"></S.MessageArea>
                    <S.SendButton className='defaultButton'>Submit</S.SendButton>
                </S.ContactForm>
            </S.Inner>
        </S.Container>
    );
};

export default Contact;