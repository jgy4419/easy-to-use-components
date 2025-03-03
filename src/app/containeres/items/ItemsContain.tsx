'use client';
import React from 'react';
import styled from "styled-components";
import Items from './items';


const ItemsContain = () => {
    return (
        <Container className="container">
            <Inner>
                <Items />
            </Inner>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: auto;
    margin: auto;
`;

const Inner = styled.div`
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default ItemsContain;
