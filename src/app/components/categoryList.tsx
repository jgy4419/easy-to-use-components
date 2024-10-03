import React from 'react';
import * as S from "./style/categoryList";
import { componentCategory } from '../constants/componentList';
import { useRouter } from 'next/navigation';
import Icon from './icon';

const CategoryList = () => {
    const router = useRouter();

    return (
        <S.ComponentCategoryList>
        {
            componentCategory.map((obj, index) => {
                return (
                    <S.ComponentCategory key={index} onClick={() => router.push("/" + obj.name)}>
                        <Icon width={70} height={70} iconName={obj.icon}/>
                        <S.ComponentName>{obj.name}</S.ComponentName>
                    </S.ComponentCategory>           
                )
            })
        }
        </S.ComponentCategoryList>
        );
};

export default CategoryList;