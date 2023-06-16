import { Message } from '../message/message.model';

/**
 * Thread represents a group of Users exchanging Messages
 */
 export interface Thread {
   id: string;
   messages: Message[];
   name: string;
   avatarSrc: string;
 }
