import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType} from './App';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValueType
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


const TodoList = (props: TodoListPropsType) => {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    console.log(title)

    const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle !== '') {
            props.addTask(title)
            console.error('Строка пустая')
        } else {
            setError(true)
        }
        setTitle('')
    }


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setTitle(event.currentTarget.value)

    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        event.key === 'Enter' && addTask()
    }


    // const onClickNandlerAll = () => props.changeFilter("all")
    // const onClickNandlerActive = () => props.changeFilter("active")
    // const onClickNandlerCompleted = () => props.changeFilter("completed")


    const handlerCreator = (filter: FilterValueType) => () => props.changeFilter(filter)
    const errormessage = error && <p style={{color: 'red', fontWeight: 'bold', margin: 0}}>Title is required</p>

    const inputErrorClasses = error ? 'input-error' : ''

    let taskslist = props.tasks.length
        ? props.tasks.map((el: TaskType) => {
            const removeTask = () => props.removeTask(el.id)
            const taskClasses = el.isDone ? 'task-done' : 'task'
            const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                props.changeTaskStatus(el.id, e.currentTarget.checked)
            }
            return (
                <li key={el.id} className={taskClasses}>
                    <input
                        onChange={changeTaskStatus}
                        type="checkbox"
                        checked={el.isDone}
                    />
                    <span>{el.title}</span>
                    <button onClick={removeTask}>x</button>
                </li>
            )
        })
        : <span>Your tasklist is empty</span>


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyDown={onKeyDownHandler}
                       className={inputErrorClasses}
                />
                <button onClick={addTask}>+</button>
                {errormessage}
            </div>
            <ul>
                {taskslist}
            </ul>
            <div>
                <button className={props.filter === 'all' ? 'btn-active' : ''}
                        onClick={handlerCreator('all')}>All
                </button>
                <button className={props.filter === 'active' ? 'btn-active' : ''}
                        onClick={handlerCreator('active')}>Active
                </button>
                <button className={props.filter === 'completed' ? 'btn-active' : ''}
                        onClick={handlerCreator('completed')}>Completed
                </button>
            </div>
        </div>
    );
};

export default TodoList;