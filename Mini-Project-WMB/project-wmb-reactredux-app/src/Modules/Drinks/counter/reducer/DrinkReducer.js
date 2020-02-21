const intialState = {
    drinks: [],
    loading: true,
}

function DrinkReducer(state = intialState, action) {
    const { type, loading, drinks = [] } = action;

    switch (type) {
        case 'DRINKS_LIST':
            return { ...state, loading: true, drinks };

        case 'DRINKS_LIST_DONE':
            return { ...state, loading, drinks };

        default:
            return state;
    }
}

export default DrinkReducer;