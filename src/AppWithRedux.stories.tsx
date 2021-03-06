import AppWithRedux from "./AppWithRedux";
import React from "react";
import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator";

export default {
    title: 'AppWithRedux Component',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
}


export const AppWithReduxBaseExample = () => {
    return <AppWithRedux/>
}