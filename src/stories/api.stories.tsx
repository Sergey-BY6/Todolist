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
    const [todolistId, setTodolistId] = useState<string>('')


    const getTasksForTodolistReq = () => {
        todolistAPI.getTasksForTodolist(todolistId)
            .then((res) => {
                console.log(res.data.items)
                setState(res.data.items)
            })
        setTodolistId("")
    }

    return (
        <div>
            <div>{JSON.stringify(state)}</div>
            <input placeholder={'todolistId'} onChange={(e) => setTodolistId(e.currentTarget.value)} value={todolistId}/>
            <button onClick={getTasksForTodolistReq}>Get tasks for todolists</button>
        </div>

    )


}

export const CreateTasksForTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const [taskTitle, setTaskTile] = useState<string>('')

    const createTasksForTodolistReq = () => {
        // todolistAPI.createTasksForTodolist(todolistId, taskTitle)
        //     .then((res) => {
        //         console.log(res.data.data.item)
        //         setState(res.data.data.item)
        //     })
        setTodolistId("")
        setTaskTile("")
    }

    return (
        <div>
            <div>{JSON.stringify(state)}</div>
            <input placeholder={'todolistId'} onChange={(e) => setTodolistId(e.currentTarget.value)} value={todolistId}/>
            <input placeholder={'task title'} onChange={(e) => setTaskTile(e.currentTarget.value)} value={taskTitle}/>
            <button onClick={createTasksForTodolistReq}>Create tasks for todolists</button>
        </div>

    )
}


export const DeleteTasksForTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const [taskId, setTaskId] = useState<string>("")

    const deleteTasksForTodolistReq = () => {
        todolistAPI.deleteTasksForTodolist(todolistId, taskId)
            .then((res) => {
                console.log(res.data)
                setState(res.data)
            })
        setTodolistId("")
        setTaskId("")
    }

    return (
        <div>
            <div>{JSON.stringify(state)}</div>
            <input placeholder={'todolistId'} onChange={(e) => setTodolistId(e.currentTarget.value)} value={todolistId}/>
            <input placeholder={'taskId'} onChange={(e) => setTaskId(e.currentTarget.value)} value={taskId}/>
            <button onClick={deleteTasksForTodolistReq}>Delete task for todolists</button>
        </div>

    )
}

export const UpdateTasksForTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const [taskId, setTaskId] = useState<string>("")
    const [taskTitle, setTaskTitle] = useState<string>("")

    const updateTasksForTodolistReq = () => {
        todolistAPI.updateTasksForTodolist(todolistId, taskId, taskTitle)
            .then((res) => {
                console.log(res.data.data.item)
                setState(res.data.data.item)
            })
        setTodolistId("")
        setTaskId("")
        setTaskTitle("")
    }


    return (
        <div>
            <div>{JSON.stringify(state)}</div>
            <input placeholder={'todolistId'} onChange={(e) => setTodolistId(e.currentTarget.value)} value={todolistId}/>
            <input placeholder={'taskId'} onChange={(e) => setTaskId(e.currentTarget.value)} value={taskId}/>
            <input placeholder={'task title'} onChange={(e) => setTaskTitle(e.currentTarget.value)} value={taskTitle}/>
            <button onClick={updateTasksForTodolistReq}>Update task for todolists</button>
        </div>

    )
}