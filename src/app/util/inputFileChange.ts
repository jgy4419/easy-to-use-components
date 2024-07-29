import {ChangeEvent} from "react";

const inputFileChangeHandler = async (event: ChangeEvent, className: string, type: string) => {
    // 이미지 변경은 base64로 변환 -> background-image 또는 file input 수정하는 함수 따로 만들기.
    const file = event.target.files[0]; // 선택된 파일
    if (file) {
        console.log(`Selected file - ${file.name}`);

        const imageData = await encodeBase64ImageFile(file).then((data) => {
            return data;
        });

        console.log("className", className)

        type === "file"
            ? setBackgroundImage(imageData, className)
            : setImage(imageData, className);
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

const setImage = (img: HTMLImageElement, className: string) => {
    const element: HTMLImageElement | null = document.querySelector(`[class*="${className}"]`);

    if(element) element.src = img

}

export { inputFileChangeHandler };