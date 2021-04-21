import React from "react";
// @ts-ignore
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";


export default {
    title: 'Task Component',
    component: EditableSpan,
}

// const callBack = action('Button "add" was inside the form')

const changeCallCallBack = action('Value changed')

export const EditableSpanBaseExample = () => {

    return <EditableSpan value={'start value'}
                         onChange={changeCallCallBack}
    />
}