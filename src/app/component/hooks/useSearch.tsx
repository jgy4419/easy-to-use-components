import { apiGet } from "@/app/util/apiModule";
import { RootState } from "@/store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { communityDataChangeHandler } from "@/store/search";

const useSearch = (state: string ) => {
    const dispatch = useDispatch();

    console.log("state", state);
    

    const searchRes = async (searchValue: string) => {
        console.log(searchValue);
        const data = await apiGet(`search/community?searchValue=${searchValue}&searchState=${state}`, "검색 결과가 잘못되었습니다.");

        // store 에 적용시켜주기
        dispatch(communityDataChangeHandler(data));
    }

    return { searchRes };
};

export default useSearch;