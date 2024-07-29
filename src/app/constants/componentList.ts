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