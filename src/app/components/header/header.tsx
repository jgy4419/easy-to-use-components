"use client"
import React, { useRef, useState } from 'react';
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
    const [menuListState, setMenuListState] = useState(false);
    const [itemState, setItemState] = useState(false);
    const router = useRouter();

    const menuState = () => {
        // 아이콘 변경
        const menuIconDom = menuIcon.current;
        menuIconDom && menuIconDom.classList.toggle("open");

        // 메뉴 추가
        setMenuListState(prev => !prev);
    }

    const menuLiHandler = (list: string) => {
        setItemState(prev => !prev);
        list !== "components"
            ? router.push(list === "home" ? "/" : "/" + list)
            : router.push("all");
        menuState();
    }

    return (
        <S.Container>
            <S.Inner>
                <S.MenuButton>
                    <div ref={menuIcon} id="menuIcon" onClick={() => menuState()}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </S.MenuButton>
                <Image className='logoImg' src={logo} alt="logo" width={50} height={50} onClick={() => router.push("/")}/>

                <S.MenuUl menuulliststate={menuListState ? 'true': undefined}>
                    {
                        (Object.keys(headerList) as Array<keyof IHeaderList>).map((list: keyof IHeaderList, index: number) => {
                            return (
                                <S.MenuLi key={index} onClick={() => menuLiHandler(list)}>
                                    {list}
                                    {/* <HeaderListItem itemState={itemState} itemList={headerList[list]}/> */}
                                </S.MenuLi>
                            )
                        })
                    }
                </S.MenuUl>
                <S.BlackBackground menuulliststate={menuListState ? 'true': undefined} onClick={menuState}/>
            </S.Inner>
            <style jsx>{`
                #menuIcon {
                    position: relative;
                    z-index:10;
                    width: 40px;
                    height: 35px;
                    position: relative;
                    margin-left: 20px;
                    -webkit-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                    -webkit-transition: .5s ease-in-out;
                    -moz-transition: .5s ease-in-out;
                    -o-transition: .5s ease-in-out;
                    transition: .5s ease-in-out;
                    cursor: pointer;
                }
                #menuIcon span {
                    display: block;
                    position: absolute;
                    height: 7px;
                    width: 100%;
                    background: #fff;
                    border-radius: 9px;
                    opacity: 1;
                    left: 0;
                    -webkit-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                    -webkit-transition: .25s ease-in-out;
                    -moz-transition: .25s ease-in-out;
                    -o-transition: .25s ease-in-out;
                    transition: .25s ease-in-out;
                }
                #menuIcon span:nth-child(1) {
                    top: 0px;
                }

                #menuIcon span:nth-child(2),#menuIcon span:nth-child(3) {
                    top: 14px;
                }

                #menuIcon span:nth-child(4) {
                    top: 28px;
                }

                #menuIcon.open span:nth-child(1) {
                    top: 18px;
                    width: 0%;
                    left: 50%;
                }

                #menuIcon.open span:nth-child(2) {
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                }

                #menuIcon.open span:nth-child(3) {
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                }

                #menuIcon.open span:nth-child(4) {
                    top: 18px;
                    width: 0%;
                    left: 50%;
                }
            `}</style>
        </S.Container>
    );
};

export default Header;

