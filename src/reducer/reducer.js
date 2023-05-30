export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_CARD': {
            const post = action.payload
            return {...state, list: [post, ...state.list] }

        }
        default: {
            return state
        }
    }

}