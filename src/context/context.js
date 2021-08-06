import React, {useReducer, createContext} from "react";

import contextReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
//  An alternative to useState.
//  useReducer is usually preferable to useState when you have
//  complex state logic that involves multiple sub-values. 
    const {transactions, dispatch} = useReducer(contextReducer, initialState);

    return (
        <ExpenseTrackerContext.Provider value = {{appName: "Expense Tracker"}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}