import React from 'react';
import * as S from "./style/itemContainer";
import Image, {StaticImageData} from "next/image";
import NonStar from "@/app/assets/images/NonStar.png";
import { useRouter, usePathname } from 'next/navigation';
import Link from "next/link";
import Warning from './warning';

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

    return (
        <Link href={`/${param.split('/')[1]}/${obj.url}`}>
            <S.Container>
                <Image className='itemImage' src={obj.img} alt="이미지" width={300}/>
                <S.HoverContainer>
                    <S.HoverInner>
                        <S.Button>Create</S.Button>
                    </S.HoverInner>
                </S.HoverContainer>
                <S.Inner>
                    <S.StarCount>
                        <Image src={NonStar} width={30} alt="favorite"/>
                        <S.Count>0</S.Count>
                    </S.StarCount>
                    <S.UploadTime>2024.07.21</S.UploadTime>
                    <Warning />
                </S.Inner>
            </S.Container>
        </Link>
    );
};

export default ItemContainer;