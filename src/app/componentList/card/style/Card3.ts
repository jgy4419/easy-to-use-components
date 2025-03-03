import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    // width: 100vw;
    // height: 100vh;
`;

export const Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BackImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 30px;
    opacity: 0;
    transition: .5s;
`;

export const ProfileTitleBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 15px;
    gap: 5px;
    transform: translate(-60%, -60%);
    opacity: 0;
    transition: .5s;
    border-radius: 30px;
`;

export const Name = styled.h2`
    font-size: 30px;
`;

export const Description = styled.p`
`;

export const ProfileSkillsBox = styled.div`
    padding: 15px;
    position: absolute;
    bottom: 0; 
    right: 0;
    width: 200px;
    height: 200px;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
    gap: 5px;
    transform: translate(60%, 60%);
    transition: .5s;
    opacity: 0;
    border-radius: 30px;
`;

export const SkillBoxTitle = styled.h2`
    font-size: 30px;
`;

export const Skill = styled.p`
    line-height: 1;
    font-size: 16px;
`;

export const Profile = styled.div<{profile: string}>`
    position: relative;
    background-image: url(${props => props.profile});
    background-repeat: no-repeat;
    width: 500px;
    height: 500px;
    border-radius: 30px;
    color: #fff;
    background-position: center;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    font-family: "Comic Sans MS", cursive;
    &:hover {
        ${BackImage} {
            opacity: 1; 
        }
        ${ProfileTitleBox} {
            opacity: 1;
            transform: translate(0);
        }
        ${ProfileSkillsBox} {
            opacity: 1;
            transform: translate(0);
        }
    }
`;
