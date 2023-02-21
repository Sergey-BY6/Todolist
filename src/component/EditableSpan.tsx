import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type EditableSpan = {
    oldTitle: string
    callback: (titleValue: string) => void
}



export const EditableSpan: React.FC<EditableSpan> = (props) => {

    const [title, setTitle] = useState(props.oldTitle)
    const [edit, setEdit] = useState(false)


    const editTable = () => {
        setEdit(true)
    }

    const onBlur = () => {
        props.callback(title)
        setEdit(false)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onBlur()
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setTitle(e.currentTarget.value)
    }

    return (
        edit ?
            <input value={title} onBlur={onBlur} onChange={onChangeHandler} onKeyDown={onEnter} autoFocus/>
            :
    <span onDoubleClick={editTable}>{props.oldTitle}</span>

    );
};

