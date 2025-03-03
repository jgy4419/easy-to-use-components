const useGithubCodeToText = () => {
    // master 기준
    // const GITHUB_API_URL = "https://raw.githubusercontent.com/jgy4419/easy-to-use-components/main/src/app/containeres";

    // feature 기준
    const GITHUB_API_URL = "https://raw.githubusercontent.com/jgy4419/easy-to-use-components/main/src/app/componentList";

    const getCode = async (path: string) => {
        return await fetch(`${GITHUB_API_URL}${path}`)
            .then(res => res.text())
            .catch(error => console.error(error));
    }

    return {
        getCode
    };
};

export default useGithubCodeToText;
