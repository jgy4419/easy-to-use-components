import componentData from "@/data/components.json";

type uiListData = "card" | "button" | "menu" | "etc";

const isUiListData = (value: any): value is uiListData => {
    return value === "card" || value === "button" || value === "menu" || value === "etc";
}

const useDataMapping = () => {
    // 선택된 카테고리에 있는 컴포넌트 데이터들을 불러옴
    const getUiListData = (path: string) => {
        const lowerPath = path.toLowerCase();

        if(isUiListData(lowerPath)) {
            const categoryData = componentData.components[lowerPath][0];
            return Object.entries(categoryData).map(([key, value]) => value);
        } else {
            return "컴포넌트들을 불러오지 못했습니다.";
        }
    }

    // Editor 에서 실제로 보여질 컴포넌트 데이터들 전송
    const getEditorData = (category: string, fileName: string) => {
        const dataObjs = getUiListData(category);

        let editorData = {};
        for(let data of dataObjs) {
            if((data as { imgName: string }).imgName === fileName) {
                editorData = data;
                break;
            }
        }

        return editorData;
    }

    return {
        getUiListData, getEditorData
    };
};

export default useDataMapping;
