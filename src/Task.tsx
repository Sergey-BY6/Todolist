import React, {ChangeEvent, memo} from 'react';
import {Checkbox, IconButton} from '@mui/material';
import {EditableSpan} from './EditableSpan';
import {Delete} from '@mui/icons-material';
import {TaskType} from './Todolist';

type TaskPropsType = {
    task: TaskType
    changeTaskStatus: (id: string, isDone: boolean) => void
    changeTaskTitle: (taskId: string, newTitle: string) => void
    removeTask: (taskId: string) => void
}


export const Task = memo((props: TaskPropsType) => {


    const onClickHandler = () => props.removeTask(props.task.id,)
    const onChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(props.task.id, newIsDoneValue);
    }
    const onChangeTaskTitle = (newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue);
    }

    return (
        <div key={props.task.id} className={props.task.isDone ? 'is-done' : ''}>
            <Checkbox
                checked={props.task.isDone}
                color="primary"
                onChange={onChangeTaskStatus}
            />

            <EditableSpan value={props.task.title} onChange={onChangeTaskTitle}/>
            <IconButton onClick={onClickHandler}>
                <Delete/>
            </IconButton>
        </div>
    )
})