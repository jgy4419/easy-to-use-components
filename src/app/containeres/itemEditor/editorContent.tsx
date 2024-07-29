import React, {useEffect} from 'react';
import * as S from "@/app/containeres/itemEditor/style/editor";
import TextEdit from "@/app/containeres/itemEditor/textEdit";
import FileEdit from "@/app/containeres/itemEditor/fileEdit";
import DescriptionEdit from "@/app/containeres/itemEditor/descriptionEdit";
import Content from "@/app/containeres/itemEditor/Content";

const EditorContent = ({ componentData }: any) => {
    // const { classNames, type } = componentData;
    const [classNames, type] = [componentData.className, componentData.type];

    useEffect(() => {
        console.log("componentData", componentData);
    }, []);

    return (
        <S.EditContent>
            {
                Object.keys(type).map((typeKey, index) => {
                    const typeValue = type[typeKey];
                    console.log("typeValue", typeValue);
                    return (
                        <>
                            {typeValue === "file" && <FileEdit name={classNames.backImage} type={typeValue}/>}
                            {typeValue === "img" && <FileEdit name={classNames.image} type={typeValue}/>}
                            {typeValue === "text" && <TextEdit name={classNames.title}/>}
                            {typeValue === "subTitle" && <TextEdit name={classNames.subTitle}/>}
                            {typeValue === "description" && <DescriptionEdit name={classNames.description}/>}
                        </>
                    )
                })
            }
        </S.EditContent>
    );
};

export default EditorContent;