import React, {useEffect, useState} from 'react'
import {todolistAPI} from '../api/todolist-api';

export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then((res) => {
                console.log(res.data)
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}


export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // const todoTitle = "TODO_3"
        // todolistAPI.createTodolist(todoTitle)
        //     .then((res) => {
        //         console.log(res.data)
        //         setState(res.data)
        //     })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}


export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const id = '9ae25690-ccbc-432f-b04a-c5b60619453a'
        todolistAPI.deleteTodolist(id)
            .then((res) => {
                console.log(res.data)
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}


export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const id = 'd25243fc-2599-447b-b38a-b81d67e4d18e'
        const todoTitle = 'TODO_7'
        todolistAPI.updateTodolistTitle(id, todoTitle)
            .then((res) => {
                console.log(res.data)
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}





export const GetTasksForTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "ca6bd4e1-17e8-4b28-b0b5-ff3b9dcde07b"
        todolistAPI.getTasksForTodolist(todolistId)
            .then((res) => {
                console.log(res.data.items)
                setState(res.data.items)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const CreateTasksForTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // const todolistId = "ca6bd4e1-17e8-4b28-b0b5-ff3b9dcde07b"
        // const title = "TASK_7"
        // todolistAPI.createTasksForTodolist(todolistId, title)
        //     .then((res) => {
        //         console.log(res.data.data.item)
        //         setState(res.data.data.item)
        //     })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}


export const DeleteTasksForTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "ca6bd4e1-17e8-4b28-b0b5-ff3b9dcde07b"
        const taskId = "d1c3c809-e017-40a8-ae5b-c27005582cbd"
        todolistAPI.deleteTasksForTodolist(todolistId, taskId)
            .then((res) => {
                console.log(res.data)
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTasksForTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "ca6bd4e1-17e8-4b28-b0b5-ff3b9dcde07b"
        const taskId = "49cd425b-6116-4603-abef-20ec229a8e29"
        const title = "TASK_6"
        todolistAPI.updateTasksForTodolist(todolistId, taskId, title)
            .then((res) => {
                console.log(res.data.data.item)
                setState(res.data.data.item)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}