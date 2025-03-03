import componentData from "@/data/components.json";

type uiListData = "card" | "button" | "menu" | "etc";

const isUiListData = (value: any): value is uiListData => {
    return value === "card" || value === "button" || value === "menu" || value === "etc";
}

const useDataMapping = () => {
    const getData = async () => {
        console.log(componentData);
    }

    const getUiListData = (path: string) => {
        const lowerPath = path.toLowerCase();

        if(isUiListData(lowerPath)) {
            const categoryData = componentData.components[lowerPath][0];
            return Object.entries(categoryData).map(([key, value]) => value);
        } else {
            return "컴포넌트들을 불러오지 못했습니다.";
        }
    }

    return {
        getData, getUiListData
    };
};

export default useDataMapping;
