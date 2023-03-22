import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import {action} from '@storybook/addon-actions';
import AppWithRedux from '../AppWithRedux';
import {store} from '../state/store';
import {Provider} from 'react-redux';
import {ReduxStoreProviderDecorator} from '../state/ReduxStoreProviderDecorator';
import {Todolist} from '../Todolist';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TODOLIST/Todolist',
  component: Todolist,
} as ComponentMeta<typeof Todolist>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Todolist> = (args) => <Todolist {...args}/>
// const Template: ComponentStory<typeof AppWithRedux> = (args) => <Provider store={store}><AppWithRedux/></Provider>

export const TodolistStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

TodolistStory.args = {
  title: "TodolistBlaBla",
  filter: "all",
  tasks: [{id: "1ghfg", title: "CSS", isDone: true},{id: "1ghfghjghj", title: "CSS", isDone: false}],
  removeTask: action("removeTask express"),
  changeFilter: action("changeFilter express"),
  addTask: action("addTask express"),
  changeTaskStatus: action("changeTaskStatus express"),
  removeTodolist: action("removeTodolist express"),
  changeTaskTitle: action("changeTaskTitle express"),
  changeTodolistTitle: action("changeTodolistTitle express"),
}



