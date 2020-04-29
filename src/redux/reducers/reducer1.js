import { ActionTypes } from '../actions';
const DEFAULT_STATE = {
    number: 0
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ActionTypes.INCREASE:
            return {
                number: state.number + 1
            }
        default:
            return state;
    }
};