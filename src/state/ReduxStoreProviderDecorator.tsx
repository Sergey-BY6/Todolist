import React from "react"
import {AppRootStateType, store} from './store';
import {Provider} from 'react-redux';
import {combineReducers, createStore } from "redux";
import {tasksReducer} from './tasks-reducer';
import {todolistsReducer} from './todolists-reducer';


const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})

const initialGlobalState = {
    todolists: [
        {id: "todolistId1", title: "What to learn", filter: "all"},
        {id: "todolistId2", title: "What to buy", filter: "all"}
    ] ,
    tasks: {
        ["todolistId1"]: [
            {id: "12345", title: "HTML&CSS", isDone: true},
            {id: "12346", title: "JS", isDone: true}
        ],
        ["todolistId2"]: [
            {id: "12347", title: "Milk", isDone: true},
            {id: "12348", title: "React Book", isDone: true}
        ]
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppRootStateType);



export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => {
    return <Provider store={storyBookStore}>{storyFn()}</Provider>
}