import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';

/**
 * Message represents one message being sent in a Thread
 */
 export interface Message {
   id: string;
   sentAt: Date;
   isRead?: boolean;
   author: User;
   text: string;
   thread: Thread;
 }
