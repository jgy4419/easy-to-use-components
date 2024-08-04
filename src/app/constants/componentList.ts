import Card1 from "../containeres/image/card/card1.png";
import Card2 from "../containeres/image/card/card2.png";
import Card3 from "../containeres/image/card/card3.png";

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
            }
        },
    }
};