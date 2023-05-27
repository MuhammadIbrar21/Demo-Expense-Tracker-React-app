import React, { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";

const initialTransactions = [
    { amount: +500, desc: "Salary" },
    { amount: -40, desc: "Book" },
    { amount: -200, desc: "Package" },
    { amount: -100, desc: "Drink" }
]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}