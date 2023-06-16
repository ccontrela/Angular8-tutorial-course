import { User } from "./user.model";
import * as UserActions from './user.action';
import { Action } from 'redux';
import { createSelector } from 'reselect';

export interface UsersState {
    currentUser: User;
};

const initialState: UsersState = {
    currentUser:  null as any
};

export const UsersReducer = 
    function(state: UsersState = initialState, action: Action): UsersState {
        switch (action.type) {
            case UserActions.SET_CURRENT_USER:
                const user: User = (<UserActions.SetCurrentAction>action).user;
                return {
                    currentUser: user
                };
            default: 
                return state;
        }
};

export const getUsersState = (state: any): UsersState => state.users;

export const getCurrentUser = createSelector(
    getUsersState,
    (state: UsersState) => state.currentUser
);