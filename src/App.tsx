import React, {useReducer} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {SuperInput} from './component/SuperInput';
import {TasksForNewTodolistAC, tasksReducer} from './reducers/tasksReducer';
import {addTodolistAC, todolistReducer} from './reducers/todolistReducer';

export type filterTasks = 'all' | 'active' | 'completed'

export type TodolistType = {
    id: string
    title: string
    filter: filterTasks
}

export type tasksType = {
    id: string
    title: string
    isDone: boolean
}

export type TasksStateType = {
    [key: string]: tasksType[]
}

function App() {

    let todolistId1 = v1()
    let todolistId2 = v1()

    const [todolist, todolistDispatch] = useReducer(todolistReducer, [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ])

    const [tasks, tasksDispatch] = useReducer(tasksReducer, {
        [todolistId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'RestAPI', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Book', isDone: false},
            {id: v1(), title: 'Apple', isDone: false},
        ],
    })


    const addTodolist = (title: string) => {
        const tdId = v1()
        todolistDispatch(addTodolistAC(title, tdId))
        tasksDispatch(TasksForNewTodolistAC(tdId))
    }

    return (
        <div className="App">
            <SuperInput callback={addTodolist}/>
            {todolist.map(el => {

                const filteredTasksFunc = () => {
                    if (el.filter === 'active') {
                        return tasks[el.id].filter(el => !el.isDone)
                    }
                    if (el.filter === 'completed') {
                        return tasks[el.id].filter(el => el.isDone)
                    } else {
                        return tasks[el.id]
                    }
                }

                return (
                    <div key={el.id}>
                        <Todolist
                            todolist={todolist}
                            todolistDispatch={todolistDispatch}
                            tasksReducer={tasks}
                            tasksDispatch={tasksDispatch}
                            key={el.id}
                            todolistId={el.id}
                            title={el.title}
                            tasks={filteredTasksFunc()}
                            filter={el.filter}
                        />
                    </div>
                )
            })
            }
        </div>
    );
}

export default App;
