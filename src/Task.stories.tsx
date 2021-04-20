import {AddItemForm} from "./AddItemForm";
import React from "react";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";


export default {
    title: 'Task Component',
    component: Task,
}

// const callBack = action('Button "add" was inside the form')

const changeTaskStatusCallBack = action('Status changed')
const changeTaskTitleCallBack = action('Title changed')
const removedTaskCallCallBack = action('Task removed')

export const TaskBaseExample = () => {

    return <>

        <Task
            task={{id: '1', isDone: true, title: 'CSS'}}
            changeTaskStatus={changeTaskStatusCallBack}
            changeTaskTitle={changeTaskTitleCallBack}
            removeTask={removedTaskCallCallBack}
            todoListId={'todoListId1'}
        />

        <Task
            task={{id: '1', isDone: false, title: 'CSS'}}
            changeTaskStatus={changeTaskStatusCallBack}
            changeTaskTitle={changeTaskTitleCallBack}
            removeTask={removedTaskCallCallBack}
            todoListId={'todoListId2'}
        />

    </>
}