"use client";
import React from 'react';
import Items from '../containeres/items/items';
import styled from 'styled-components';

const Card = () => {
    return (
        <Container>
            <Inner>
                <Items />            
            </Inner>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100%;   
`;

const Inner = styled.div`
    position: absolute;
    width: 70%;
    inset: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Card;