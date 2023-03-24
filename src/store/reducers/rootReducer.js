const initState = {
    users: [
        { id: 1, name: `Andkaha` },
        { id: 2, name: `KimHajin` },
        { id: 3, name: `Embibeep` }
    ],
    post: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            // console.log(`check delete user: `, action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1001)
            let user = { id: id, name: `random - ${id}` }
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }

    return state;
}

export default rootReducer;