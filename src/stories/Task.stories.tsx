import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {AddItemForm} from '../AddItemForm';
import {action} from '@storybook/addon-actions';
import TextField from '@mui/material/TextField/TextField';
import {IconButton} from '@mui/material';
import {AddBox} from '@mui/icons-material';
import {Task} from '../Task';
import {TaskType} from '../Todolist';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TODOLIST/Task',
  component: Task,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
args: {
  changeTaskStatus: action("changeTaskStatus"),
  changeTaskTitle: action("changeTaskTitle"),
  removeTask: action("removeTask"),
  task: {id: "22222", title: "JS", isDone: true},
  todolistId: "sfsfsfsffs"
}
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDone = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

// TaskIsDone.args = {
//   changeTaskStatus: action("changeTaskStatus"),
//       changeTaskTitle: action("changeTaskTitle"),
//     removeTask: action("removeTask"),
//     task: {id: "22222", title: "JS", isDone: true},
// todolistId: "sfsfsfsffs"
// };

export const TaskIsNotDone = Template.bind({});

TaskIsNotDone.args = {
  task: {id: "22222", title: "JS", isDone: false},
};


