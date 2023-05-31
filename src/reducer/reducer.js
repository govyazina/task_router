export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_CARD': {
            const post = action.payload
            return {...state, list: [post, ...state.list] }

        }
        case 'EDIT_CARD': {
            const post = action.payload
            const newList = state.list.map(el => {
                if (el.id === post.id) {
                    el = {...post}
                }
                return {...el}
            })
            return {...state, list: [...newList] }
        }
        case 'DELETE_CARD': {
            const id = action.payload
            const newList = state.list.filter(el => el.id !== id)
            return {...state, list: [...newList] }
        }
        default: {
            return state
        }
    }

}