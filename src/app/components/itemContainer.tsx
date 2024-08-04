import React from 'react';
import * as S from "./style/itemContainer";
import Image, {StaticImageData} from "next/image";
import NonStar from "@/app/assets/images/NonStar.png";
import Star from "@/app/assets/images/Star.png";
import { useRouter, usePathname } from 'next/navigation';

interface IItem {
    url: string,
    img: StaticImageData,
    className: {
        title: string,
        description: string,
        backImage: string
    }
}

const ItemContainer = ({ obj }: { obj: IItem }) => {
    const param = usePathname();
    const router = useRouter();

    const itemClickHandler = () => {
        router.push(param + "/" + obj.url);
    }
    return (
        <S.Container onClick={() => itemClickHandler()}>
            <Image className='itemImage' src={obj.img} alt="이미지" width={500} height={280}/>
            <S.HoverContainer>
                <S.HoverInner>
                    <S.Button>Create</S.Button>
                </S.HoverInner>
            </S.HoverContainer>
            <S.Inner>
                <S.StarCount>
                    <Image src={NonStar} width={40} alt="favorite"/>
                    <S.Count>0</S.Count>
                </S.StarCount>
                <S.UploadTime>2024.07.21</S.UploadTime>
            </S.Inner>
        </S.Container>
    );
};

export default ItemContainer;