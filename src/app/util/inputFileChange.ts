const inputFileChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>, className: string, type: string) => {
    // 이미지 변경은 base64로 변환 -> background-image 또는 file input 수정하는 함수 따로 만들기.
    const target = event.target as HTMLInputElement;  // target을 HTMLInputElement로 캐스팅
    const files = target.files;  // 이제 files에 접근 가능
    if (files && files[0]) {
        const file = files[0];  // 선택된 파일

        console.log(`Selected file - ${file.name}`);

        // encodeBase64ImageFile 함수가 Base64 문자열을 반환한다고 가정
        const imageData: any = await encodeBase64ImageFile(file).then((data) => data);

        console.log("className", className);

        // type이 'file'인지에 따라 다른 처리
        type === "file"
            ? setBackgroundImage(imageData, className)
            : setImage(imageData, className);
    } else {
        console.error("No file selected.");
    }
}

const encodeBase64ImageFile = (image: File) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (event) => {
            const target = event.target;
            resolve(target && target.result);
        };
        reader.onerror = (error) => {
            reject(error);
        }
    })
}

const setBackgroundImage = (img: unknown, className: string) => {
    const element: HTMLElement | null = document.querySelector(`[class*="${className}"]`);

    if(element)
        element.style.backgroundImage = `url(${img})`;
}

const setImage = (img: any, className: string) => {
    const element: HTMLImageElement | null = document.querySelector(`[class*="${className}"]`);

    if(element) element.src = img

}

export { inputFileChangeHandler };