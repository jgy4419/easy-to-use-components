import React from 'react';
import * as S from "./style/itemContainer";
import Image from "next/image";
import NonStar from "@/app/assets/images/NonStar.png";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Warning from './warning';
import { IItemContainerObj } from './types/type';


const ItemContainer = ({ obj }: {obj : IItemContainerObj}) => {
    const param = usePathname();
    const imageSrc = `/image/${String(obj.category).toLowerCase()}/${obj.imgName}.png`;

    return (
        <Link href={`/${param.split('/')[1]}/${obj.imgName}`}>
            <S.Container>
                <Image className='itemImage' src={imageSrc} alt="이미지" width={300} height={150}/>
                <S.HoverContainer>
                    <S.HoverInner>
                        <S.Button>Create</S.Button>
                    </S.HoverInner>
                </S.HoverContainer>
                <S.Inner>
                    <S.StarCount>
                        <Image src={NonStar} width={30} alt="favorite"/>
                        <S.Count>{obj.star}</S.Count>
                    </S.StarCount>
                    <S.UploadTime>{obj.date.split('T')[0]}</S.UploadTime>
                    <Warning note={obj.note}/>
                </S.Inner>
            </S.Container>
        </Link>
    );
};

export default ItemContainer;