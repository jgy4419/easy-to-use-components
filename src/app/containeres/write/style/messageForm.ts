import styled from "styled-components";

export const Container = styled.div`
`;

export const FormBox = styled.div`
    position: relative;
    max-width: 1200px;
    width: 70%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: start;
    margin: auto;
`;

export const Information = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 0 0 20px 0;
`;

export const Lists = styled.div`
    display: flex;
    gap: 10px;
`;

export const ContentInput = styled.textarea`
    display: flex;
    justify-content: center;
    background: #0F1214;
    border-radius: 5px;
    width: 100%;
    min-height: 200px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #333;
    resize: none;
    color: #fff;
    label {
        color: grey;
    }
    div {
        color: #fff;
}
`;

export const UserName = styled.input`
    color: #fff;
    background: #0F1214;
    padding: 10px 20px;
    border: 0;
    label, div {
        color: #eee;
        font-size: 14px;
    }
`;

export const SubmitButton = styled.button`
    position: absolute;
    bottom: -50px;
    right: 0;
    padding: 10px 15px;
    background: #0F1214;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #fff;
    transition: .3s;
    &:hover {
        background-color: #fff;
        color: #0F1214;
    }
`;

export const TitleInput = styled.input`
    position: relative;
    width: 250px;
    padding: 15px;
    top: -10px;
    background-color: rgb(15,18,20);
    color: #fff;
    border: 0;
    border-radius: 5px;
    // text-align: left;
`;