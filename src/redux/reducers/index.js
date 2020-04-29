import { combineReducers } from 'redux';
import reducer1 from './reducer1';
import reducer2 from './reducer2';
import loginReducer from '../../views/login/reducer';

export const rootReducer = combineReducers({
    reducer1,
    reducer2,
    loginReducer,
})