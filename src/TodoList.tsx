import React, {ChangeEvent} from 'react';
import {filterTasks, TasksStateType, tasksType, TodolistType} from './App';
import {SuperInput} from './component/SuperInput';
import {EditableSpan} from './component/EditableSpan';
import {editSpanTdNameAC, removeTodolistAC, setFilterValueAC, TodolistMainType} from './reducers/todolistReducer';
import {
    addTaskAC,
    changeTaskAC,
    deleteArrayTasksAC,
    editSpanTdAC,
    removeTaskAC,
    TasksMainType
} from './reducers/tasksReducer';



type TodolistPropsType = {
    todolist: TodolistType[]
    todolistDispatch: (action: TodolistMainType) => void

    tasksReducer: TasksStateType
    tasksDispatch: (action: TasksMainType) => void

    todolistId: string
    title: string
    tasks: tasksType[]
    filter: filterTasks
}


export const Todolist: React.FC<TodolistPropsType> = (props) => {


    const todolist = props.tasks.length ? props.tasks.map(el => {

            const removeTask = () => {
                    props.tasksDispatch(removeTaskAC(props.todolistId, el.id))
            }

            const changeTaskHandker = (e: ChangeEvent<HTMLInputElement>) => {
                    props.tasksDispatch(changeTaskAC(props.todolistId, el.id, e.currentTarget.checked))
            }

            const editSpanTdHandler = (titleValue: string) => {
                    props.tasksDispatch(editSpanTdAC(props.todolistId, el.id, titleValue))
            }

            return (
                <li key={el.id} className={el.isDone ? 'isDone' : ''}>
                    <input type="checkbox"
                           checked={el.isDone}
                           onChange={changeTaskHandker}
                    />

                    <EditableSpan oldTitle={el.title} callback={editSpanTdHandler}/>
                    <button onClick={removeTask}>x</button>
                </li>
            )
        })
        : <div style={{color: 'red'}}>This is empty</div>




    const setFilterAll = () => {
        props.todolistDispatch(setFilterValueAC(props.todolistId, 'all'))
    }
    const setFilterActive = () => {
        props.todolistDispatch(setFilterValueAC(props.todolistId, 'active'))
    }
    const setFilterCompleted = () => {
        props.todolistDispatch(setFilterValueAC(props.todolistId, 'completed'))
    }

    const addTask = (newTitleTask: string) => {
        props.tasksDispatch(addTaskAC(props.todolistId, newTitleTask))
    }

    const removeTodolist = () => {
            props.todolistDispatch(removeTodolistAC(props.todolistId))
            props.tasksDispatch(deleteArrayTasksAC(props.todolistId))
    }

    const editSpanTdName = (titleValue: string) => {
            props.todolistDispatch(editSpanTdNameAC(props.todolistId, titleValue))
    }

    return (
        <div>
            <h3>
                <EditableSpan oldTitle={props.title} callback={editSpanTdName}/>
                <button onClick={removeTodolist}>x</button>
            </h3>
            <div>
                <SuperInput callback={addTask}/>
            </div>
            <ul>
                {todolist}
            </ul>
            <div>
                <button onClick={setFilterAll}
                        className={props.filter === 'all' ? 'active-filter' : ''}>All
                </button>
                <button onClick={setFilterActive}
                        className={props.filter === 'active' ? 'active-filter' : ''}>Active
                </button>
                <button onClick={setFilterCompleted}
                        className={props.filter === 'completed' ? 'active-filter' : ''}>Completed
                </button>
            </div>
        </div>
    );
};

