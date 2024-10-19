'use client';
import React from 'react';
import styled from "styled-components";
import Items from './items';


const ItemsContain = () => {
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
    height: 88%;
    overflow: scroll;
    margin: auto;
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

export default ItemsContain;