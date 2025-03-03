'use client';
import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faIdCard, faTabletScreenButton, faBars, faStar,IconDefinition, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface IIconProps {
    width: number,
    height: number,
    iconName: string
}

// 아이콘 이름과 아이콘 객체를 매핑하는 객체
const iconMap: { [key: string]: IconDefinition } = {
    'faEarthAmericas': faEarthAmericas,
    'faIdCard': faIdCard,
    'faTabletScreenButton': faTabletScreenButton,
    'faBars': faBars,
    'faStar': faStar,
    'faMagnifyingGlass': faMagnifyingGlass,
    'faGithub': faGithub,
    'faInstagram': faInstagram
};

const IconBox = ({ width, height, iconName }: IIconProps) => {
    const icon = iconMap[iconName]; // 아이콘 이름에 맞는 아이콘 객체 가져오기

    if (!icon) {
        // 매핑되지 않은 아이콘일 경우 처리
        return <span>Icon not found</span>;
    }

    return (
        <ComponentIcon width={width} height={height}>
            <FontAwesomeIcon icon={icon} style={{ width: `${50}%`, height: `${50}%` }} />
        </ComponentIcon>
    );
};

const ComponentIcon = styled.div<{width: number, height: number}>`
    position: relative;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    // background-color: #282F34;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        width: ${props => props.width / 1.2}px;
        height: ${props => props.width / 1.2}px;
    }
`;

export default IconBox;
