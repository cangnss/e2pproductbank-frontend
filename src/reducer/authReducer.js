export default function reducer(state, action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log("Action payload:", action.payload)
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            localStorage.setItem("token", JSON.stringify(action.payload.token))
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