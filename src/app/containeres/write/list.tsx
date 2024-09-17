'use client';

import React from 'react';
import * as S from "./style/list";
import { RootState } from "@/store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { componentChange, categoryChange } from "@/store/community";

const List = ({title, list}: {title: string, list: string[]}) => {
    const {category, component } = useSelector((state: RootState) => state.community);
    const dispatch = useDispatch();

    const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>, item: string) => {
        const value = event.target.value;

        console.log(value, item);

        item === "category"
            ? dispatch(componentChange(value))
            : dispatch(categoryChange(value));

        console.log(category, component);
    }

    return (
        <>
            <S.Select onChange={(event) => selectChangeHandler(event, title)}>
                <S.Option value={title}>{title}</S.Option>
                {
                    list.map((item, index) => {
                        return (
                            <S.Option value={item} key={index}>{item}</S.Option>
                        )
                    })
                }
            </S.Select>
        </>
    );
};

export default List;