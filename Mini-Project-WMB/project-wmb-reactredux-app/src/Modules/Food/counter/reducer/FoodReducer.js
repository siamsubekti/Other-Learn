const intialState = {
    foods: [],
    loading: true,
}

function MakananReducer(state = intialState, action) {
    const { type, loading, foods = [] } = action;

    switch (type) {
        case 'FOODS_LIST':
            return { ...state, loading: true, foods };

        case 'FOODS_LIST_DONE':
            return { ...state, loading, foods };

        default:
            return state;
    }
}

export default MakananReducer;