import { all } from 'redux-saga/effects';
import { watchSagaLogin, watchSagaGetUsers } from '../../views/login/saga';

function* rootSaga() {
    yield all([
        watchSagaLogin(),
        watchSagaGetUsers(),
    ]);
};

export default rootSaga;