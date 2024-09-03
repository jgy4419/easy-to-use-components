import styled from "styled-components";
import {Search as SearchIcon} from "@mui/icons-material";

export const SearchContainer = styled.div`
    position: relative;
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin: auto;
`;

export const CreatePost = styled.div`
    font-weight: 700;
    cursor: pointer;
    padding: 15px 30px;
    background-color: rgb(15,18,20);
    border: 2px solid rgb(15,18,20);
    transition: .3s;
    border-radius: 10px;
    &:hover {
        border: 2px solid #1b6ca2;
    }
    &:active {
        background: #1b6ca2;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    width: 200px;
    display: flex;
`;

export const SearchInput = styled.input`
    position: absolute;
    width: 100%;
    right: 12%;
    border-radius: 10px;
    background-color: #0F1214;
    color: #fff;
    border: 0;
    padding: 15px 20px;
`;

export const SearchButton = styled(SearchIcon)`
    position: absolute;
    top: 10px;
    right: 40px;
`;