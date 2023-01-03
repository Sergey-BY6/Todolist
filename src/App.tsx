import React from 'react';
import './App.css';
import TodoList, {TaskType} from './TodoList';


function App() {
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "Need to do"

    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS/TS", isDone: false}
    ]

    const tasks_2: Array<TaskType> = [
        {id: 1, title: "products", isDone: true},
        {id: 2, title: "fuel", isDone: true},
        {id: 3, title: "repair parts", isDone: false}
    ]



    return (
        <div className="App">
           <TodoList title={todoListTitle_1} tasks={tasks_1}/>
           <TodoList title={todoListTitle_2} tasks={tasks_2}/>

        </div>
    );
}

export default App;
