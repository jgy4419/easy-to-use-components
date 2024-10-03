import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faIdCard, faTabletScreenButton, faBars, faStar,IconDefinition } from '@fortawesome/free-solid-svg-icons';

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
    'faStar': faStar
};

const Icon = ({ width, height, iconName }: IIconProps) => {
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
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    background-color: #282F34;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        width: 50px;
        height: 50px;
    }
`;

export default Icon;
