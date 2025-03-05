import React from 'react';
import * as S from "@/app/containeres/itemEditor/style/editor";
import TextEdit from "@/app/containeres/itemEditor/input/textEdit";
import FileEdit from "@/app/containeres/itemEditor/input/fileEdit";
import DescriptionEdit from "@/app/containeres/itemEditor/input/descriptionEdit";

const EditorContent = ({ componentData }: any) => {

    return (
        <S.EditContent>
            <div>
                {componentData.fileClass !== "" && <FileEdit name={componentData.fileClass} type="file"/>}
                {/* {componentData === "img" && <FileEdit name={classNames.image} type={typeValue}/>} */}
                {componentData.title !== "" && <TextEdit name={componentData.titleClass}/>}
                {/* {componentData.description !== "" && <TextEdit name={classNames.subTitle}/>} */}
                {componentData.description !== "" && <DescriptionEdit name={componentData.descriptionClass}/>}
            </div>
        </S.EditContent>
    );
};

export default EditorContent;