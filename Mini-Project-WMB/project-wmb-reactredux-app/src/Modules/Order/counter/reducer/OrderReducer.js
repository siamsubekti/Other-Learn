const initialState = {
    formType: 'new',
    loading: true,
    orders: {
        customerName: "",
        tables: {
            id: 0,
        },
        quantityCustomer: null,
        cashier: {
            id: null
        },
        orderDetails: [
            {
                menu: {
                    id: null
                },
                quantity: null
            }
        ]
    }
}


function PesananReducer(state = initialState, action) {
    const { type, orders, order, formType, loading } = action;

    switch (type) {
        case 'STORE_FORM_DATA':
            return { ...state, order };
        case 'SUBMIT_ORDER':
            return { ...state, loading: true, };
        case 'FETCH_A_ORDER':
            return { ...state, loading: true, formType };
        case 'FETCH_A_ORDER_DONE':
            return { ...state, loading, order, formType };
        case 'FETCH_ORDERS':
            return { ...state, loading: true, orders: [] };
        case 'FETCH_ORDERS_DONE':
            return { ...state, loading, orders };
        default:
            return state;
    }
}

export default PesananReducer;