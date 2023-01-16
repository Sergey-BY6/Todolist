import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList, {TaskType} from './TodoList';
import {v1} from 'uuid';


export type FilterValueType = 'all' | 'active' | 'completed'


function App() {
    const todoListTitle_1: string = 'What to learn'

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS/TS', isDone: false}
    ])

    console.log(tasks)
    const [filter, setFilter] = useState<FilterValueType>('all')


    //    для отслеживания стайте синхронно
    // useEffect(() => {
    //     console.log(tasks)
    // },[tasks, filter])


    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])
    }



    const getFilteredTasksForRender = (tasks: Array<TaskType>, filter: FilterValueType): Array<TaskType> => {
        switch (filter) {
            case 'active':
                return tasks.filter((el => !el.isDone))
            case 'completed':
                return tasks.filter((el => el.isDone))
            default:
                return tasks
        }
    }

    const filteredTasksForender = getFilteredTasksForRender(tasks, filter)

    return (
        <div className="App">
            <TodoList title={todoListTitle_1}
                      tasks={filteredTasksForender}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
