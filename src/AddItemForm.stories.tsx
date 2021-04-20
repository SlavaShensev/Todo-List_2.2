import {AddItemForm} from "./AddItemForm";
import React from "react";
// @ts-ignore
import {action} from "@storybook/addon-actions";


export default {
    title: 'AddItemForm Component',
    component: AddItemForm,
}

const callBack = action('Button "add" was inside the form')

export const AddItemFormBaseExample = () => {

    return <AddItemForm addItem={callBack}/>
}