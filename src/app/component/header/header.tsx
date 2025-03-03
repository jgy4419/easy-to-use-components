"use client"
import React, { useRef } from 'react';
import * as S from "../style/header";
import logo from "@/app/assets/images/logo.png";
import Image from "next/image";
import { IHeaderList, headerList } from '../../constants/main';
import { useRouter } from "next/navigation";

/*
    TODO
    - props로 넘길 때 컴포넌트로 넘기면 안됨
    - 구조 전체적으롱 수정해야됨.
*/
const Header = () => {
    const menuIcon = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const menuState = () => {
        // 아이콘 변경
        const menuIconDom = menuIcon.current;
        menuIconDom && menuIconDom.classList.toggle("open");
    }

    const menuLiHandler = (list: string) => {
        list !== "components"
            ? router.push(list === "home" ? "/" : "/" + list)
            : router.push("/uiList/All");
        menuState();
    }

    return (
        <S.Container>
            <S.Inner>
                <Image className='logoImg' src={logo} alt="logo" width={50} height={50} onClick={() => router.push("/")}/>
                <S.MenuUl>
                    {
                        (Object.keys(headerList) as Array<keyof IHeaderList>).map((list: keyof IHeaderList, index: number) => {
                            return (
                                <S.MenuLi key={index} onClick={() => menuLiHandler(list)}>
                                    {list.toLocaleUpperCase()}
                                </S.MenuLi>
                            )
                        })
                    }
                </S.MenuUl>
            </S.Inner>
        </S.Container>
    );
};

export default Header;

