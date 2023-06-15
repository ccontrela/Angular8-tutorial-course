import { AppState } from './app.state';
import { INCREMENT, DECREMENT } from './counter.action';
import { Action } from 'redux';
import { Reducer } from 'redux';

const initialState: AppState = { counter: 0 };

export const counterReducer: Reducer<AppState> = (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, { counter : state.counter + 1});
        case DECREMENT:
            return Object.assign({}, state, { counter : state.counter - 1});
        default:
            return state;
    }
};