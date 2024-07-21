"use client";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { usePathname } from "next/navigation";
import dynamic from 'next/dynamic';

interface ICardDetail {
    componentName: string;
}

const CardDetail = () => {
    const [Component, setComponent] = useState<any>(null);
    const param = usePathname();
    const regex = /[^/]+$/;
    const match = param.match(regex);

    useEffect(() => {
        const loadComponent = async () => {
            try {
                const ImportedComponent = dynamic(() => import(`@/app/containeres/card/${match && match[0]}`));
                setComponent(() => ImportedComponent);
            } catch (error) {
                console.error(`Error loading component`, error);
                setComponent(() => <div>Error loading component</div>);
            }
        };

        loadComponent();
    }, [param]);

    if (!Component) return <div>Loading...</div>;

    return (
        <Container>
            <Inner>
                <Component />
            </Inner>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Inner = styled.div`
    position: absolute;
    width: 70%;
    height: 80%;
    inset: 0;
    margin: auto;
    border: 1px solid #fff;
`;

export default CardDetail;
