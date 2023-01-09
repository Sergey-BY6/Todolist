import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList, {TaskType} from './TodoList';


export type FilterValueType = 'all' | 'active' | 'completed'


function App() {
    const todoListTitle_1: string = 'What to learn'

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS/TS', isDone: false}
    ])


    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }

    const [filter, setFilter] = useState<FilterValueType>('all')

    //    для отслеживания стайте синхронно
    useEffect(() => {
        console.log(tasks)
    },[tasks, filter])



    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
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
            />
        </div>
    );
}

export default App;
