import React, {ChangeEvent, useState} from 'react';


type EditableSpanType = {
    OLDtitle: string
    callBack: (netTitle: string) => void
}

export const EditableSpan = (props: EditableSpanType) => {

    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.OLDtitle)

    const editFooHandler = () => {
        setEdit(!edit)
        props.callBack(newTitle)
    }

const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
}



    return (
            edit
            ?
            <input onChange={onChangeHandler} value={newTitle} onBlur={editFooHandler} autoFocus/>
            :
            <span onDoubleClick={editFooHandler}>{props.OLDtitle}</span>
)
    ;
};

