import React from 'react';
import {FilterValueType} from './App';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (filter: FilterValueType) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}


const TodoList = (props: TodoListPropsType) => {


    let taskslist = props.tasks.length
        ? props.tasks.map((el: TaskType) => {
            const removeTask = () => props.removeTask(el.id)
            return (
                <li><input type="checkbox"
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
                <input/>
                <button>+</button>
            </div>
            <ul>
                {taskslist}
            </ul>
            <div>
                <button onClick={() => props.changeFilter("all")}>All</button>
                <button onClick={() => props.changeFilter("active")}>Active</button>
                <button onClick={() => props.changeFilter("completed")}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;