import { Message } from "../message/message.model";
import { uuid } from "../util/uuid";
import { Thread } from "./thread.model";
import { Action, ActionCreator } from 'redux';

export const ADD_THREAD = '[Thread] Add';
export const ADD_MESSAGE = '[Thread] Add Message';
export const SELECT_THREAD = '[Thread] Select';


//Add Thread
export interface AddThreadAction extends Action {
    thread: Thread;
};

export const addThread: ActionCreator<AddThreadAction> = (thread) => ({
    type: ADD_THREAD,
    thread: thread
});

//Add Message
export interface AddMessageAction extends Action {
    thread: Thread;
    message: Message;
};

export const addMessage: ActionCreator<AddMessageAction> = 
    (thread: Thread, messageArgs: Message): AddMessageAction => {
        const defaults = {
            id: uuid(),
            sendAt: new Date(),
            isRead: false,
            thread: thread
        };
        const message: Message = Object.assign({}, defaults, messageArgs);

        return {
            type: ADD_MESSAGE,
            thread: thread,
            message: message
        };
};

//Select Thread
export interface SelectThreadAction extends Action {
    thread: Thread;
};

export const selectThread: ActionCreator<SelectThreadAction> = (thread) => ({
    type: SELECT_THREAD,
    thread: thread
});