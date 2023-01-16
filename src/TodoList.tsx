import React, {ChangeEvent, KeyboardEvent,  useState} from 'react';
import {FilterValueType} from './App';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTask: (title: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


const TodoList = (props: TodoListPropsType) => {

    const [title, setTitle] = useState<string>("")
    console.log(title)

const addTask = () => {
    props.addTask (title)
    setTitle("")
}



const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
}

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
       event.key === "Enter" && addTask ()
    }

    // const onClickNandlerAll = () => props.changeFilter("all")
    // const onClickNandlerActive = () => props.changeFilter("active")
    // const onClickNandlerCompleted = () => props.changeFilter("completed")


    const handlerCreator = (filter: FilterValueType) => () => props.changeFilter(filter)



    let taskslist = props.tasks.length
        ? props.tasks.map((el: TaskType) => {
            const removeTask = () => props.removeTask(el.id)
            return (
                <li key={el.id} ><input type="checkbox"
                           checked={el.isDone}/>
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
                <input value={title} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {taskslist}
            </ul>
            <div>
                <button onClick={handlerCreator("all")}>All</button>
                <button onClick={handlerCreator("active")}>Active</button>
                <button onClick={handlerCreator("completed")}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;