import { useState, useRef } from "react";
import * as S from "@/app/components/style/header";
import * as React from "react";

export const HamburgerBar = () => {
    const [menuListState, setMenuListState] = useState(false);
    const menuIcon = useRef<HTMLDivElement>(null);

    const menuState = () => {
        // 아이콘 변경
        const menuIconDom = menuIcon.current;
        menuIconDom && menuIconDom.classList.toggle("open");

        // 메뉴 추가
        setMenuListState(prev => !prev);
    }

    return (
        <>
            <S.MenuButton>
                <div id="menuIcon" ref={menuIcon} onClick={() => menuState()}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </S.MenuButton>
            <style jsx>{`
                #menuIcon {
                    position: relative;
                    z-index: 10;
                    width: 40px;
                    height: 35px;
                    position: relative;
                    margin: 50px auto;
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

                #menuIcon span:nth-child(2), #menuIcon span:nth-child(3) {
                    top: 18px;
                }

                #menuIcon span:nth-child(4) {
                    top: 36px;
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
        </>
    )
}