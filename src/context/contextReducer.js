// Reducer() => a function that takes in the old state=> and an action => return new state 
const contextReducer = (state, action) => {
    let transactions;
    switch (action.type) {
        case "DELETE_TRANSACTION":
            transactions = state.filter((t) => t.id !== action.payload)
    
            // Storing the data in the local Storage of the browser
            localStorage.setItem("transactions", JSON.stringify(transactions));

            return transactions;
        case "ADD_TRANSACTION":
            transactions = [action.payload, ...state];

            // Storing the data in the local Storage of the browser
            localStorage.setItem("transactions", JSON.stringify(transactions));
            
            return transactions;
        default:
            return state;
    }
}

export default contextReducer;