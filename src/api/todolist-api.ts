import axios from 'axios';



type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}


type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}


type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: Date
    deadline: Date
    id: string
    todoListId: string
    order: number
    addedDate: Date
}

type GetTaskType = {
    items: TaskType[]
    totalCount: number
    error: string
}
//
// type ResponseCreateTaskType = {
//     fieldsErrors: string[]
//     resultCode: number
//     messages: string[]
//     data: {item: TaskType}
// }
// type ResponseUpdateTaskType = {
//     fieldsErrors: string[]
//     resultCode: number
//     messages: string[]
//     data: {item: TaskType}
// }
// type ResponseDeleteTaskType = {
//     fieldsErrors: string[]
//     resultCode: number
//     messages: string []
//     data:{}
// }


type ResponseTaskType< T = {}> = {
    fieldsErrors: string[]
    resultCode: number
    messages: string []
    data: T
}







const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '313ded19-330d-429f-a6f0-8b2872a8253d'
    }
})

const settings = {
    withCredentials: false
}


export const todolistAPI = {
    getTodolists() {
        const promise = instance.get<TodolistType[]>('todo-lists')
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title: title})
        return promise
    },
    deleteTodolist(id: string) {
        const promise = instance.delete<ResponseType>(`todo-lists/${id}`)
        return promise
    },
    updateTodolistTitle(id: string, title: string) {
        const promise = instance.put<ResponseType>(`todo-lists/${id}`, {title: title})
        return promise
    },
    getTasksForTodolist(todolistId: string) {
        const promise = instance.get<GetTaskType>(`todo-lists/${todolistId}/tasks`)
        return promise
    },
    createTasksForTodolist(todolistId: string, title: string) {
        const promise = instance.post<ResponseTaskType<{item: TaskType}>>(`todo-lists/${todolistId}/tasks`, {title: title})
        return promise
    },
    deleteTasksForTodolist(todolistId: string, taskId: string) {
        const promise = instance.delete<ResponseTaskType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
        return promise
    },
    updateTasksForTodolist(todolistId: string, taskId: string, title: string) {
        const promise = instance.put<ResponseTaskType<{item: TaskType}>>(`/todo-lists/${todolistId}/tasks/${taskId}`, {title: title})
        return promise
    },
}

