import Star from "@/app/assets/images/Star.png";
import Profile from "@/app/assets/images/profile.jpeg";

export interface IHeaderList {
    home: string[];
    components: string[];
    community: string[];
}

export const headerList: IHeaderList = {
    home: [""],
    components: ["Card", "Button", "Accordion", "Footer", "Header", "Menu", "ETC", "Input", "Login"],
    community: [""]
};

export const mainContent = {
    title: "Hi, I'm Jgy",
    subTitle: "Frontend Developer",
    description: "I provide people with a UI that they can easily create."
}

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