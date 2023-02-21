import {TasksStateType} from '../App';
import {v1} from 'uuid';


export const tasksReducer = (state: TasksStateType, action: TasksMainType): TasksStateType => {
    switch (action.type) {
        case 'RREMOVE-TASK': {
            return {...state, [action.payload.todolistId]: state[action.payload.todolistId].filter(el => el.id !== action.payload.taskId)}
        }
        case 'ADD-TASK': {
            let newTask = {id: v1(), title: action.payload.newTitleTask, isDone: false}
            return {...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]}
        }
        case 'CHANGE-TASK' : {
            return {...state, [action.payload.todolistId]: state[action.payload.todolistId].map(el => el.id === action.payload.taskId ? {...el, isDone: action.payload.checkedValue} : el)}
        }
        case 'EDIT-SPAN-TD': {
            return {...state, [action.payload.todolistId]: state[action.payload.todolistId].map(el => el.id === action.payload.taskId ? {...el, title: action.payload.titleValue} : el)}
        }
        case 'DELETE-ARRAY-TASKS': {
            delete state[action.payload.todolistId]
            return state
        }
        case 'TASKS-FOR-NEW-TODOLIST': {
            return {...state, [action.payload.tdId]: [
                        {id: v1(), title: 'Day', isDone: true},
                        {id: v1(), title: 'Night', isDone: false},
                    ]}
        }
        default: {
            return state
        }
    }
}


export type TasksMainType = removeTaskACType | addTaskACType | changeTaskACType | editSpanTdACType | deleteArrayTasksAC | TasksForNewTodolistAC

type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: 'RREMOVE-TASK',
        payload: {
            todolistId: todolistId,
            taskId: taskId
        }
    } as const
}

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolistId: string, newTitleTask: string) => {
    return {
        type: "ADD-TASK",
        payload: {
            todolistId: todolistId,
            newTitleTask: newTitleTask
        }
    } as const
}

type changeTaskACType = ReturnType<typeof changeTaskAC>
export const changeTaskAC = (todolistId: string, taskId: string, checkedValue: boolean) => {
    return {
        type: "CHANGE-TASK",
        payload: {
            todolistId:todolistId,
            taskId: taskId,
            checkedValue:checkedValue
        }
    } as const
}

type editSpanTdACType = ReturnType<typeof editSpanTdAC>
export const editSpanTdAC = (todolistId: string, taskId: string, titleValue: string) => {
    return {
        type: "EDIT-SPAN-TD",
        payload: {
            todolistId: todolistId,
            taskId: taskId,
            titleValue: titleValue
        }
    } as const
}

type deleteArrayTasksAC = ReturnType<typeof deleteArrayTasksAC>
export const deleteArrayTasksAC = (todolistId: string) => {
    return {
        type: "DELETE-ARRAY-TASKS",
        payload: {
            todolistId: todolistId
        }
    } as const
}


type TasksForNewTodolistAC =ReturnType<typeof TasksForNewTodolistAC>
export const TasksForNewTodolistAC = (tdId: string) => {
    return {
        type: "TASKS-FOR-NEW-TODOLIST",
        payload: {
            tdId: tdId
        }
    } as const
}