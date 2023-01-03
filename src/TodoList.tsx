import React from 'react';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}


const TodoList = (props: TodoListPropsType) => {


    let taskslist = props.tasks.length
        ? props.tasks.map((el: TaskType) => {
            return (
                <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;