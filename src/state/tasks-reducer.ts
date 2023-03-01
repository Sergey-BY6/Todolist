import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType, ChangeTodolistFilterActionType, RemoveTodolistActionType} from './todolists-reducer';

export type removeTaskACType = ReturnType<typeof removeTaskAC>
export type addTaskACType = ReturnType<typeof addTaskAC>
export type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export type changeTasksTitleACType = ReturnType<typeof changeTasksTitleAC>


type ActionsType = removeTaskACType | addTaskACType | changeTaskStatusACType | changeTasksTitleACType
| AddTodolistActionType | RemoveTodolistActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return {...state, [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.taskId)}
        }
        case 'ADD-TASK':{
            let newTask =   { id: "4", title: action.title, isDone: false }
            return {...state, [action.todolistId]: [newTask, ...state[action.todolistId]]}
        }
        case 'CHANGE-TASK-STATUS':{
           return {
               ...state, [action.todolistId]: state[action.todolistId].map( el => el.id === action.taskId ? {...el, isDone: action.isDone}: el)
           }
        }
        case 'CHANGE-TITLE-STATUS':{
            return {
                ...state, [action.todolistId]: state[action.todolistId].map( el => el.id === action.taskId ? {...el, title: action.title}: el)
            }
        }
        case 'ADD-TODOLIST':{
            return {
                ...state, [action.todolistId]: []
            }
        }
        case 'REMOVE-TODOLIST':{
            const copyState = {...state}
            delete copyState[action.id]
            return  copyState

            // const {[action.id]: [], ...rest} = {...state}
            // return rest
        }


        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
    return { type: 'REMOVE-TASK', taskId, todolistId} as const
}


export const addTaskAC = (title: string, todolistId: string) => {
    return { type: 'ADD-TASK', title, todolistId} as const
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return { type: 'CHANGE-TASK-STATUS', taskId, isDone, todolistId} as const
}

export const changeTasksTitleAC = (taskId: string, title: string, todolistId: string) => {
    return { type: 'CHANGE-TITLE-STATUS', taskId, title, todolistId} as const
}

