import styled from "styled-components";

const Input = styled.input`
    resize: none;
    padding: 20px 10px;
    border: 0;
    font-size: 12px;
    width: 100%;
    max-width: 500px;
`;

const TextArea = styled.textarea`
    resize: none;
    padding: 10px;
    height: 150px;
    border: 0;
    //color: #fff;
    //background-color: rgb(15,18,20) !important;
    font-size: 12px;
    width: 100%;
    max-width: 500px;
`;

export const Inner = styled.div`
    width: 70%;
    margin: auto;
    text-align: center;
`;

export const Title = styled.h2`
    color: var(--main-font-color);
`;

export const Description = styled.p`
    color: grey;
`;

export const GithubUrl = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InstaUrl = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    align-items: center;
`;

export const NameInput = styled(Input)`
`;

export const TitleInput = styled(Input)`
`;

export const MessageArea = styled(TextArea)`
    
`;

export const SendButton = styled.button`
    height: 50px;
    width: 100%;
    max-width: 500px;
`;

export const Container = styled.section`
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;
    @media (max-width: 1200px) {
        ${Title} {
            font-size: 20px;
        }
        ${Description} {
            font-size: 12px;
        }
        ${GithubUrl}, ${InstaUrl} {
            font-size: 14px;
        }
        input, textarea {
            font-size: 10px;
        }
        ${SendButton} {
            font-size: 12px;
            height: 45px;
        }
    }
`;
