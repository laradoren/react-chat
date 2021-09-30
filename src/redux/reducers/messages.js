const initialState = {
    items: [],
    isLoading: false
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'MESSAGES:SET_ITEMS':
            return {
                ...state,
                items: payload
            };
        case 'MESSAGES:SET_LOADING':
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
}