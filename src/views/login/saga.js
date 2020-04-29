import { takeLatest, put } from 'redux-saga/effects';
import { ActionTypes, loginError, loginSuccess, getUserSuccess, getUserError } from './action';

const BASE_URL = "https://h-chat-backend.herokuapp.com/api";

const API_LOGIN = BASE_URL + '/user/signup';
const API_GET_LIST_USER = 'https://5e8f4470fe7f2a00165ef149.mockapi.io/api/v1/users';


function* sagaLogin(dataLogin) {
    const response = yield fetch(API_LOGIN, {
        method: 'POST',
        body: JSON.stringify(dataLogin.payload)
    });
    const resJSON = yield response.json();
    // console.log({ resJSON })
    if (resJSON.status === 200) {
        yield put(loginSuccess(resJSON.data))
    } else {
        yield put(loginError(resJSON.error.message))
    }
};

export function* watchSagaLogin() {
    yield takeLatest(ActionTypes.LOGIN, sagaLogin)
}

function* sagaGetUsers() {
    const response = yield fetch(API_GET_LIST_USER, {
        method: 'GET'
    });
    const resJSON = yield response.json();
    yield put(getUserSuccess(resJSON))
};

export function* watchSagaGetUsers() {
    yield takeLatest(ActionTypes.GET_USERS, sagaGetUsers);
}