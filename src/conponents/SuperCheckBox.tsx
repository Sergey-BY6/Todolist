import React, {ChangeEvent} from 'react';

type PropsType={
    isDone:boolean
    callback:(checkedValue: boolean)=>void
}

export const SuperCheckBox = (props:PropsType) => {
    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        props.callback(event.currentTarget.checked)
    }
    return (
        <input type='checkbox' checked={props.isDone} onChange={onChangeHandler}/>
    );
};

