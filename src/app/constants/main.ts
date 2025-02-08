import Star from "@/app/assets/images/Star.png";
import Profile from "@/app/assets/images/profile.jpeg";

export interface IHeaderList {
    contact: string[];
    components: string[];
    community: string[];
}

export const headerList: IHeaderList = {
    components: ["card", "button", "accordion", "footer", "header", "menu", "etc", "input", "login"],
    community: [""]
};

export const mainContent = {
    title: "다양한 종류의 컴포넌들을 쉽게 만들어보세요!",
    subTitle: "로 만들어보세요",
    description: "I provide people with a UI that they can easily create."
}


export const demoImages = [
    {
        imgPath: "/image/components/main/main_demo1.png",
        url: "/uiList/All/Card4"
    }, {
        imgPath: "/image/components/main/main_demo2.png",
        url: "/uiList/All/Card5"
    }, {
        imgPath: "/image/components/main/main_demo3.png",
        url: "/uiList/All/Card7"
    }, {
        imgPath: "/image/components/main/main_demo4.png",
        url: "/uiList/All/Card2"
    }
];



// main - project section

export const projectSection = {
    imgContent: {
        title: "Projects",
        img: [Profile, Star],
    },
    content: {
        title: "Introduction",
        description: `
        Provides various types of UI components.
        
        Click the Demo button and check out the various components!
        
        This is not a perfect code, so feedback is always welcome ^,^
        `,
        button: "Demo"
    },
}

export const stepImages = [
    "/image/components/main/preview.png",
    "/image/components/main/edit.png",
    "/image/components/main/code.png"
];

export const contact = {
    instagram: "jgy_98",
    github: "https://github.com/jgy4419",
    email: "jgy_98@naver.com"
}
