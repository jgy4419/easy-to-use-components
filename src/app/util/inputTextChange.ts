import {ChangeEvent} from "react";

const inputTextChangeHandler = (event: ChangeEvent, className: string) => {
    const target: any = event.target;
    const changeDom: HTMLElement | null = document.querySelector(`[class*="${className}"]`);

    if (changeDom) {
        changeDom.innerText = target.value;
    }
}

export { inputTextChangeHandler };