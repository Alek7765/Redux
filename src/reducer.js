const initialState = { counter: 0 }; // начальное состояние

const reducer = (state = initialState, action) => { // начальное состояние и действие, которое нужно произвести
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DEC':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'RND':
            return {
                ...state,
                counter: state.counter * action.payload
            };
        default:
            return state;
    };
}

export default reducer;