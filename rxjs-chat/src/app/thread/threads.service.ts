import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { Thread } from './thread.model';
import { Message } from '../message/message.model';
import { MessagesService } from '../message/messages.service';


@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  threads: Observable<{ [key: string]: Thread }>;

  orderedThreads: Observable<Thread[]>;

  currentThread: Subject<Thread> = new BehaviorSubject<Thread>(new Thread());

  currentThreadMessages: Observable<Message[]>;

  constructor(public messagesService: MessagesService) {
    this.threads = messagesService.messages
      .pipe(
        map((messages: Message[]) => {
          const threads: {[key: string]: Thread} = {};
          messages.map((message: Message) => {
            threads[message.thread.id] = threads[message.thread.id] || message.thread;
            const messagesThread: Thread = threads[message.thread.id];
            if (!messagesThread.lastMessage ||
                messagesThread.lastMessage.sentAt < message.sentAt) {
              messagesThread.lastMessage = message;
            }
          });
          return threads;
        })
      );

    this.orderedThreads = this.threads
      .pipe(
        map((threadGroups: { [key: string]: Thread }) => {
          const threads: Thread[] = Object.values(threadGroups);
          return threads.sort((a: Thread, b: Thread) => {
            return a.lastMessage.sentAt === b.lastMessage.sentAt ? 0 :
              a.lastMessage.sentAt < b.lastMessage.sentAt ? -1 : 1;
          });
        })
      );

    this.currentThreadMessages =
      combineLatest(
        this.currentThread,
        messagesService.messages,
      )
      .pipe(
        map(([currentThread, messages]: [Thread, Message[]]): Message[] => {
          if (currentThread && messages.length > 0) {
            return messages
              .filter((message: Message) => message.thread.id === currentThread.id)
              .map((message: Message) => {
                message.isRead = true;
                return message;
              });
          } else {
            return [];
          }
        })
      );

    this.currentThread
      .subscribe(this.messagesService.markThreadAsRead);
    
  }

  setCurrentThread(newThread: Thread): void {
    this.currentThread.next(newThread);
  }

}
