import React from 'react';
import * as S from "./style/categoryList";
import { componentCategory } from '../constants/componentList';
import { useRouter } from 'next/navigation';

const CategoryList = () => {
    const router = useRouter();
    
    return (
        <S.ComponentCategoryList>
        {
            componentCategory.map((obj, index) => {
                return (
                    <S.ComponentCategory key={index} onClick={() => router.push("/" + obj.name)}>
                        <S.ComponentIcon></S.ComponentIcon>
                        <S.ComponentName>{obj.name}</S.ComponentName>
                    </S.ComponentCategory>           
                )
            })
        }
        </S.ComponentCategoryList>
        );
};

export default CategoryList;