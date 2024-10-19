import { apiGet } from "@/app/util/apiModule";
import { RootState } from "@/store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { communityDataChangeHandler } from "@/store/search";

const useSearch = (state: string ) => {
    const dispatch = useDispatch();

    const searchFilter = (searchValue: string) => {
        if(state === "community")
            communityHandler(searchValue);
        else if (state === "component") {
            componentHandler(searchValue);
        }
    }

    const communityHandler = async (searchValue: string) => {
        console.log(searchValue);
        const data = await apiGet(`search/community?searchValue=${searchValue}`, "검색 결과가 잘못되었습니다.");
        console.log(data);

        // store 에 적용시켜주기
        dispatch(communityDataChangeHandler(data));
    }

    const componentHandler = (searchValue: string) => {

    }

    return { searchFilter };
};

export default useSearch;