export default function reducer(state, action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log("Action payload:", action.payload)
            localStorage.setItem("user", JSON.stringify(action.payload))
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        case 'LOGOUT':
            localStorage.removeItem("user")
            return {
                ...state,
                user: null,
                token: null
            }
        default:
            return state;
    }
}