import React, {useReducer, createContext} from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
//  An alternative to useState.
//  useReducer is usually preferable to useState when you have
//  complex state logic that involves multiple sub-values. 
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Action Creators
    const deleteTransaction = (id) => {
        dispatch({type: "DELETE_TRANSACTION", payload: id});
    }

    const addTransaction = (transaction) => {
        dispatch({type: "ADD_TRANSACTION", payload: transaction});
    } 
    
    return (
        <ExpenseTrackerContext.Provider value = {{deleteTransaction, addTransaction, transactions}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}