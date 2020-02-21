const initialState = {
    transactions: [],
    loading: true,
}

function TransactionReducer(state = initialState, action) {
    const { type, loading, transactions = [] } = action;

    switch (type) {
        case 'TRANSACTION_LIST':
            return {...state, loading: true, transactions};
        case 'TRANSACTION_LIST_DONE':
            return {...state, loading, transactions}
    
        default:
            return state;
    }
}

export default TransactionReducer;