import Card1 from "../containeres/image/card/card1.png";
import Card2 from "../containeres/image/card/card2.png";
import Card3 from "../containeres/image/card/card3.png";

import Button1 from "../containeres/image/button/button1.png";
import Button2 from "../containeres/image/button/button2.png";
import Button3 from "../containeres/image/button/button3.png";

// 이미지 서버 


export const componentCategory = [
    {
        name: "All",
        icon: ""
    },
    {
        name: "Card",
        icon: ""
    },
    {
        name: "Button",
        icon: ""
    },
    {
        name: "Menu",
        icon: ""
    },
    {
        name: "ETC",
        icon: ""
    }
]

// 나중에 DB에 추가
export const itemList = {
    Card: {
        card1: {
            url: "card1",
            img: Card1,
            className: {
                title: "MainText",
                description: "SubText",
                backImage: "Card1Content",
            },
            type: {
                title: "text",
                description: "description",
                backImage: "file"
           },
            code: {
                jsx: `
const Card1 = () => {
const [content, setContent] = useState({
    title: "Some title",
    description: "some description about this card and it's ourpose."
});

return (
    <S.Card1Content>
        <S.DarkBackGround/>
        <S.Card1MainText>${"Some title"}</S.Card1MainText>
        <S.Card1SubText>${"some description"}</S.Card1SubText>
    </S.Card1Content>
 );
};

export default Card1;`,
                style: "import styled from 'styled-components';\n" +
                    "\n" +
                    "export const Card1Container = styled.div`\n" +
                    "    position: relative;\n" +
                    "    width: 100%;\n" +
                    "    height: 50%;\n" +
                    "    background-color: #eeeeee;\n" +
                    "`\n" +
                    "\n" +
                    "export const Card1Inner = styled.div`\n" +
                    "    position: absolute;\n" +
                    "    width: 80%;\n" +
                    "    height: 100%;\n" +
                    "    inset: 0;\n" +
                    "    margin: auto;\n" +
                    "`\n" +
                    "\n" +
                    "export const DarkBackGround = styled.div`\n" +
                    "    position: absolute;\n" +
                    "    width: 100%;\n" +
                    "    height: 100%;\n" +
                    "    background: rgba(0, 0, 0, .3);\n" +
                    "    top: 0;\n" +
                    "    left: 0;\n" +
                    "    border-radius: 10px;\n" +
                    "    transition: .3s;\n" +
                    "`\n" +
                    "\n" +
                    "export const Card1MainText = styled.h1`\n" +
                    "    position: relative;\n" +
                    "    font-size: 40px;\n" +
                    "    color: #fff;\n" +
                    "    text-shadow: 1px 1px 1px #333;\n" +
                    "`\n" +
                    "\n" +
                    "export const Card1SubText = styled.p`\n" +
                    "    position: relative;\n" +
                    "    margin: auto;\n" +
                    "    max-width: 250px;\n" +
                    "    color: #fff;\n" +
                    "    text-shadow: 1px 1px 1px #333;\n" +
                    "    opacity: 0;\n" +
                    "    transform: translateY(30px);    \n" +
                    "    transition: .3s;\n" +
                    "`\n" +
                    "\n" +
                    "export const Card1Content = styled.div`\n" +
                    "    position: absolute;\n" +
                    "    background-image: url('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-mens-shoes-jBrhbr.png');\n" +
                    "    background-size: cover;\n" +
                    "    background-repeat: no-repeat;\n" +
                    "    background-position: 50%;\n" +
                    "    object-fit: cover;\n" +
                    "    width: 350px;\n" +
                    "    height: 200px;\n" +
                    "    border: 3px solid #fff;\n" +
                    "    border-radius: 20px;\n" +
                    "    box-sizing: border-box;\n" +
                    "    padding: 20px;\n" +
                    "    text-align: center;\n" +
                    "    display: flex;\n" +
                    "    flex-direction: column;\n" +
                    "    &:hover {\n" +
                    "        ${DarkBackGround} {\n" +
                    "            background: transparent;\n" +
                    "            transition: .3s;\n" +
                    "        }\n" +
                    "        ${Card1SubText} {\n" +
                    "            opacity: 1;\n" +
                    "            transform: translateY(0px);\n" +
                    "            transition: .3s;\n" +
                    "        }\n" +
                    "    }\n" +
                    "`"
            }
        },
        card2: {
            url: "card2",
            img: Card2,
            className: {
                title: "MainTitle",
                subTitle: "SubTitle",
                description: "Description",
                image: "ItemImage",
            },
            type: {
                title: "text",
                subTitle: "subTitle",
                description: "description",
                image: "img"
            },
            code: {
                jsx: `import React, {useState} from 'react';
import * as S from './style/card2';

const Card2 = () => {
    const [content, useContent] = useState({
        mainTitle: 'Pepsi',
        subTitle: 'Zero Sugar',
        description: 'Peppsi Zero Sugar is the only soda with zero calories and maximum pepsi taste!',
        button: 'Buy Now',
        img: 'https://www.pepsi.com/en-us/uploads/images/can-pzs.png'
    });
    return (
        <>
            <S.Card2Container>
                <S.Card2Inner>
                    <S.Item>
                        <S.Content>
                            <S.MainTitle>{content.mainTitle}</S.MainTitle>
                            <S.SubTitle>{content.subTitle}</S.SubTitle>
                            <S.Description>{content.description}</S.Description>
                            <S.Button>{content.button}</S.Button>
                        </S.Content>
                        <S.ItemImage src={content.img}/>
                    </S.Item>
                </S.Card2Inner>
            </S.Card2Container>
        </>
    );
};

export default Card2;`,
                style: "import styled from 'styled-components';\n" +
                    "\n" +
                    "export const Card2Container = styled.div`\n" +
                    "    position: relative;\n" +
                    "    //width: 100vw;\n" +
                    "    //height: 50vh;\n" +
                    "`;\n" +
                    "\n" +
                    "export const Card2Inner = styled.div`\n" +
                    "    position: relative;\n" +
                    "    width: 100%;\n" +
                    "    height: 100%;\n" +
                    "    display: flex;\n" +
                    "    justify-content: center;\n" +
                    "    align-items: center;\n" +
                    "`;\n" +
                    "\n" +
                    "export const Content = styled.div`\n" +
                    "    display: none;\n" +
                    "    transition: .5s;\n" +
                    "    color: #fff;\n" +
                    "`;\n" +
                    "\n" +
                    "export const MainTitle = styled.h1`\n" +
                    "    font-size: 50px;\n" +
                    "`\n" +
                    "\n" +
                    "export const SubTitle = styled.h3`\n" +
                    "    font-size: 35px;\n" +
                    "    margin-top: -10px;\n" +
                    "`\n" +
                    "\n" +
                    "export const Description = styled.p`\n" +
                    "    width: 300px;\n" +
                    "    font-weight: 600;\n" +
                    "`\n" +
                    "\n" +
                    "export const Button = styled.button`\n" +
                    "    width: 200px;\n" +
                    "    height: 50px;\n" +
                    "    border: 0;\n" +
                    "    border-radius: 20px;\n" +
                    "    background-color: #fff;\n" +
                    "    color: blue;\n" +
                    "    font-size: 25px;\n" +
                    "    font-weight: 700;\n" +
                    "    cursor: pointer;\n" +
                    "    transition: .5s;\n" +
                    "    &:hover {\n" +
                    "        background-color: blue;\n" +
                    "        color: #fff;\n" +
                    "        border: 2px solid #fff;\n" +
                    "        box-sizing: border-box;\n" +
                    "    }\n" +
                    "`\n" +
                    "\n" +
                    "export const Item = styled.div`\n" +
                    "    position: absolute;\n" +
                    "    width: 400px;\n" +
                    "    height: 400px;\n" +
                    "    background-color: red;\n" +
                    "    border-radius: 50%;\n" +
                    "    display: flex;\n" +
                    "    align-items: center;\n" +
                    "    justify-content: space-around;\n" +
                    "    transition: .5s;\n" +
                    "    &:hover {\n" +
                    "        width: 800px;\n" +
                    "        border-radius: 40px;\n" +
                    "        background-color: blue;\n" +
                    "        ${Content} {\n" +
                    "            display: flex;\n" +
                    "            flex-direction: column;\n" +
                    "            gap: 10px;\n" +
                    "        }\n" +
                    "        transition: .5s;\n" +
                    "    }\n" +
                    "`;\n" +
                    "\n" +
                    "export const ItemImage = styled.img`\n" +
                    "    width: 200px;\n" +
                    "`;"
            }
        },
        card3: {
            url: "card2",
            img: Card3,
            className: {
                title: "MainTitle",
                subTitle: "SubTitle",
                description: "SubText",
                image: "ItemImage",
            },
            type: {
                title: "text",
                subTitle: "SubTitle",
                description: "description",
                image: "file"
            },
            code: {
                jsx: `import React, {useState} from 'react';
import * as S from './style/card2';

const Card2 = () => {
    const [content, useContent] = useState({
        mainTitle: 'Pepsi',
        subTitle: 'Zero Sugar',
        description: 'Peppsi Zero Sugar is the only soda with zero calories and maximum pepsi taste!',
        button: 'Buy Now',
        img: 'https://www.pepsi.com/en-us/uploads/images/can-pzs.png'
    });
    return (
        <>
            <S.Card2Container>
                <S.Card2Inner>
                    <S.Item>
                        <S.Content>
                            <S.MainTitle>{content.mainTitle}</S.MainTitle>
                            <S.SubTitle>{content.subTitle}</S.SubTitle>
                            <S.Description>{content.description}</S.Description>
                            <S.Button>{content.button}</S.Button>
                        </S.Content>
                        <S.ItemImage src={content.img}/>
                    </S.Item>
                </S.Card2Inner>
            </S.Card2Container>
        </>
    );
};

export default Card2;`,
                style: "import styled from 'styled-components';\n" +
                    "\n" +
                    "export const Card2Container = styled.div`\n" +
                    "    position: relative;\n" +
                    "    //width: 100vw;\n" +
                    "    //height: 50vh;\n" +
                    "`;\n" +
                    "\n" +
                    "export const Card2Inner = styled.div`\n" +
                    "    position: relative;\n" +
                    "    width: 100%;\n" +
                    "    height: 100%;\n" +
                    "    display: flex;\n" +
                    "    justify-content: center;\n" +
                    "    align-items: center;\n" +
                    "`;\n" +
                    "\n" +
                    "export const Content = styled.div`\n" +
                    "    display: none;\n" +
                    "    transition: .5s;\n" +
                    "    color: #fff;\n" +
                    "`;\n" +
                    "\n" +
                    "export const MainTitle = styled.h1`\n" +
                    "    font-size: 50px;\n" +
                    "`\n" +
                    "\n" +
                    "export const SubTitle = styled.h3`\n" +
                    "    font-size: 35px;\n" +
                    "    margin-top: -10px;\n" +
                    "`\n" +
                    "\n" +
                    "export const Description = styled.p`\n" +
                    "    width: 300px;\n" +
                    "    font-weight: 600;\n" +
                    "`\n" +
                    "\n" +
                    "export const Button = styled.button`\n" +
                    "    width: 200px;\n" +
                    "    height: 50px;\n" +
                    "    border: 0;\n" +
                    "    border-radius: 20px;\n" +
                    "    background-color: #fff;\n" +
                    "    color: blue;\n" +
                    "    font-size: 25px;\n" +
                    "    font-weight: 700;\n" +
                    "    cursor: pointer;\n" +
                    "    transition: .5s;\n" +
                    "    &:hover {\n" +
                    "        background-color: blue;\n" +
                    "        color: #fff;\n" +
                    "        border: 2px solid #fff;\n" +
                    "        box-sizing: border-box;\n" +
                    "    }\n" +
                    "`\n" +
                    "\n" +
                    "export const Item = styled.div`\n" +
                    "    position: absolute;\n" +
                    "    width: 400px;\n" +
                    "    height: 400px;\n" +
                    "    background-color: red;\n" +
                    "    border-radius: 50%;\n" +
                    "    display: flex;\n" +
                    "    align-items: center;\n" +
                    "    justify-content: space-around;\n" +
                    "    transition: .5s;\n" +
                    "    &:hover {\n" +
                    "        width: 800px;\n" +
                    "        border-radius: 40px;\n" +
                    "        background-color: blue;\n" +
                    "        ${Content} {\n" +
                    "            display: flex;\n" +
                    "            flex-direction: column;\n" +
                    "            gap: 10px;\n" +
                    "        }\n" +
                    "        transition: .5s;\n" +
                    "    }\n" +
                    "`;\n" +
                    "\n" +
                    "export const ItemImage = styled.img`\n" +
                    "    width: 200px;\n" +
                    "`;"
            }
        },
    },
    Button: {
        button1: {
            url: "button1",
            img: Button1,
            className: {
                title: "button1"
            },
            type: {
                title: "text",
            },
            code: {
                jsx: `import React from 'react';
import * as S from './style/Button1';

const Button1 = () => {
    return (
        <S.Button1Container>
            <S.Button1>Hover Me!</S.Button1>
        </S.Button1Container>
    );
};

export default Button1;`,
                style: "import styled from 'styled-components';\n" +
                    "\n" +
                    "export const Button1Container = styled.div`\n" +
                    "    position: relative;\n" +
                    "    z-index: 1;\n" +
                    "    width: 100vw;\n" +
                    "    height: 120px;\n" +
                    "    background-color: #333;\n" +
                    "`\n" +
                    "export const Button1 = styled.button`\n" +
                    "    position: relative;\n" +
                    "    top: 30px;\n" +
                    "    margin: auto;\n" +
                    "    display: flex;\n" +
                    "    align-items: center;\n" +
                    "    jusify-content: center;\n" +
                    "    color: #fff;\n" +
                    "    border: none;\n" +
                    "    background-color: transparent;\n" +
                    "    padding: 12px 20px;\n" +
                    "    cursor: pointer;\n" +
                    "    font-weight: 700;\n" +
                    "    &:before {\n" +
                    "        content: \"\";\n" +
                    "        position: absolute;\n" +
                    "        top: 50%;\n" +
                    "        z-index: -1;\n" +
                    "        translate: calc(100% + 4px) -50%;\n" +
                    "        width: 45px;\n" +
                    "        height: 45px;\n" +
                    "        background: #0561ee;\n" +
                    "        border-radius: 50px;\n" +
                    "        transition: \n" +
                    "            translate 0.25s 0.25s\n" +
                    "            cubic-bezier(0, 0, 0.5, 2),\n" +
                    "            width 0.25s\n" +
                    "            cubic-bezier(0, 0, 0.5, 2);\n" +
                    "    }\n" +
                    "    &:hover {\n" +
                    "        &:before{\n" +
                    "            width: 100%;\n" +
                    "            translate: -10px -50%;\n" +
                    "            transition:\n" +
                    "                translate 0.25s\n" +
                    "                cubic-bezier(0, 0, 0.5, 2),\n" +
                    "                width 0.25s 0.25s\n" +
                    "                cubic-bezier(0, 0, 0.5, 2);\n" +
                    "        }\n" +
                    "    }\n" +
                    "`"
            }
        },
        button2: {
            url: "button2",
            img: Button2,
            className: {
                title: "button2"
            },
            type: {
                title: "text",
            },
            code: {
                jsx: `import React, {useState} from 'react';
import * as S from './style/button2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faComment } from '@fortawesome/free-solid-svg-icons';

const Button2 = () => {
    const [buttons, setButtons] = useState([
        faHouse, faUser, faComment
    ]);
    return (
        <S.Button2Container>
            <S.Button2Inner>
                <S.Buttons>
                    {
                        buttons.map((button, index) => {
                            return (
                                <S.Button key={index}>
                                    <S.IconContain>
                                        <FontAwesomeIcon icon={button} />
                                    </S.IconContain>
                                </S.Button>
                            )
                        })
                    }
                </S.Buttons>
            </S.Button2Inner>
        </S.Button2Container>
    );
};

export default Button2;`,
                style: "import styled from 'styled-components';\n" +
                    "\n" +
                    "export const Button2Container = styled.div`\n" +
                    "    position: relative;\n" +
                    "    width: 100vw;\n" +
                    "    height: 10vh;\n" +
                    "`;\n" +
                    "\n" +
                    "export const Button2Inner = styled.div`\n" +
                    "    position: absolute;\n" +
                    "    width: 70%;\n" +
                    "    height: 100%;\n" +
                    "    inset: 0;\n" +
                    "    margin: auto;\n" +
                    "`;\n" +
                    "\n" +
                    "export const Buttons = styled.div`\n" +
                    "    width: 100%;\n" +
                    "    height: 100%;\n" +
                    "    display: flex;\n" +
                    "    justify-content: center;\n" +
                    "    align-items: center;\n" +
                    "    gap: 10%;\n" +
                    "`;\n" +
                    "\n" +
                    "export const IconContain = styled.div`  \n" +
                    "    font-size: 30px;\n" +
                    "    transition: .3s;\n" +
                    "    border: 0;\n" +
                    "`;\n" +
                    "\n" +
                    "export const Button = styled.button`\n" +
                    "    width: 80px;\n" +
                    "    height: 80px;\n" +
                    "    border-radius: 20px;\n" +
                    "    background-color: #fff;\n" +
                    "    border: 0 solid #fff;\n" +
                    "    transition: .3s;\n" +
                    "    cursor: pointer;\n" +
                    "    &: hover {\n" +
                    "        background-color: transparent;\n" +
                    "        border: 3px solid #fff;\n" +
                    "        ${IconContain} {\n" +
                    "            color: #fff;\n" +
                    "            transform: perspective(100px) rotateY(180deg);\n" +
                    "        }\n" +
                    "    }\n" +
                    "`;"
            }
        },
        button3: {
            url: "button3",
            img: Button3,
            className: {
                title: "button2"
            },
            type: {
                title: "text",
            },
            code: {
                jsx: `import React from 'react';
import * as S from './style/button3';
import arrow from "./img/arrow.png";
import heart from "./img/heart.png";
import save from "./img/save.png";

const Button3 = () => {
    return (
        <S.Button3Container>
            <S.ButtonContent>
                <S.Button>PLAY</S.Button>
                {
                    [arrow, heart, save].map((img, index) => {
                        return (
                            <S.Button3DImg src={img} key={index}/>
                        )
                    })
                }
            </S.ButtonContent>
        </S.Button3Container>
    );
};

export default Button3;`,
                style: "import styled from \"styled-components\";\n" +
                    "\n" +
                    "export const Button3Container = styled.div`\n" +
                    "    width: 100vw;\n" +
                    "    height: 10vh;\n" +
                    "    display: flex;\n" +
                    "    justify-content: center;\n" +
                    "    align-items: center;\n" +
                    "`;\n" +
                    "\n" +
                    "export const Button = styled.button`\n" +
                    "    position: absolute;\n" +
                    "    width: 100%;\n" +
                    "    height: 100%;\n" +
                    "    background: radial-gradient(#D2E0FB, #B931FC);\n" +
                    "    border: 0;\n" +
                    "    color: #fff;\n" +
                    "    border-radius: 40px;\n" +
                    "    transition: transform 0.3s;\n" +
                    "    font-weight: 700;\n" +
                    "    font-size: 20px;\n" +
                    "`;\n" +
                    "\n" +
                    "export const Button3DImg = styled.img`\n" +
                    "    position: absolute;\n" +
                    "    width: 80px;\n" +
                    "    opacity: 0;\n" +
                    "    transition: \n" +
                    "        2s\n" +
                    "        cubic-bezier(0, 2, 0.5, 2);\n" +
                    "    transform: translateY(20px);\n" +
                    "`;\n" +
                    "\n" +
                    "export const ButtonContent = styled.div`\n" +
                    "    position: relative;\n" +
                    "    width: 150px;\n" +
                    "    height: 70px;\n" +
                    "    cursor: pointer;\n" +
                    "    &:hover {\n" +
                    "        ${Button} {\n" +
                    "            transform: scale(1.2);\n" +
                    "        }\n" +
                    "        ${Button3DImg}{\n" +
                    "            opacity: .8;\n" +
                    "            transition: \n" +
                    "                .3s \n" +
                    "                cubic-bezier(0, 2, 0.5, 2);\n" +
                    "            &:nth-child(2) {\n" +
                    "                transform: translate(70px, -30px);\n" +
                    "            }\n" +
                    "            &:nth-child(3) {\n" +
                    "                transform: translate(30px, 30px);\n" +
                    "            }\n" +
                    "            &:nth-child(4) {\n" +
                    "                width: 50px;\n" +
                    "                transform: translate(0px, 5px);\n" +
                    "            }\n" +
                    "        }\n" +
                    "    }\n" +
                    "`;"
            }
        }
    }
};