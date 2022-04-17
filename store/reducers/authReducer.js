import * as Types from '../actions/types';

const init = {
    isAuthenticated: false,
    user: {},
    token: ''
}

const authReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_USER:
            return {
                isAuthenticated: action.payload.auth,
                user: action.payload.user,
                token: action.payload.token
            }
        case Types.USER_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}
export default authReducer