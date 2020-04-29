export const ActionTypes = {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',

    GET_USERS: 'GET_USERS',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_ERROR: 'GET_USERS_ERROR'
};

export function login(dataLogin) {
    return {
        type: ActionTypes.LOGIN,
        payload: dataLogin
    }
}

export function loginSuccess(success) {
    console.log({ success })
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: success
    }
}

export function loginError(error) {
    console.log({ error });
    return {
        type: ActionTypes.LOGIN_ERROR,
        payload: error
    }
}

export function getUsers() {
    return {
        type: ActionTypes.GET_USERS
    }
}

export function getUserSuccess(success) {
    // console.log({ success })
    return {
        type: ActionTypes.GET_USERS_SUCCESS,
        payload: success
    }
}

export function getUserError(error) {
    console.log({ error });
    return {
        type: ActionTypes.GET_USERS_ERROR,
        payload: error
    }
}