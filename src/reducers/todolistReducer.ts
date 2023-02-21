import {filterTasks, TodolistType} from '../App';


export const todolistReducer = (state: TodolistType[], action: TodolistMainType): TodolistType[] => {
    switch (action.type) {
        case 'SET-FILTER-VALUE': {
            return state.map(el => el.id === action.payload.todolistId ? {...el, filter: action.payload.filterValue} : el)
        }
        case 'EDIT-SPAN-TD-NAME': {
            return state.map(el => el.id === action.payload.todolistId ? {...el, title: action.payload.title} : el)
        }
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id !== action.payload.todolistId)
        }
        case 'ADD-TODOLIST': {
            let newTodolist: TodolistType = {id: action.payload.tdId, title: action.payload.title, filter: 'all'}
            return [newTodolist, ...state]
        }
        default: {
            return  state
        }
    }
}


export type TodolistMainType = setFilterValueACType | editSpanTdNameAC | removeTodolistAC | addTodolistACType

type setFilterValueACType = ReturnType<typeof setFilterValueAC>
export const setFilterValueAC = (todolistId: string, filterValue: filterTasks) => {
    return {
        type: "SET-FILTER-VALUE",
        payload: {
            todolistId: todolistId,
            filterValue: filterValue
        }
    } as const
}

type editSpanTdNameAC = ReturnType<typeof editSpanTdNameAC>
export const editSpanTdNameAC = (todolistId: string, title: string) => {
    return {
        type: "EDIT-SPAN-TD-NAME",
        payload: {
            todolistId: todolistId,
            title: title
        }
    } as const
}

type removeTodolistAC = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {
            todolistId: todolistId
        }
    } as const
}


type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string, tdId: string) => {
    return {
        type: "ADD-TODOLIST",
        payload: {
            title: title,
            tdId: tdId
        }
    } as const
}