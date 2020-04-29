import { ActionTypes } from "./action";

const DEFAULT_STATE = {
    users: []
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}