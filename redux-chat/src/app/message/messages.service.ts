import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, scan, publishReplay, refCount, map } from 'rxjs/operators';

import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Message } from './message.model';

const initialMessages: Message[] = [];

interface MessageOperation extends Function {
  (messages: Message[]): Message[];
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  newMessages: Subject<Message> = new Subject<Message>();

  messages: Observable<Message[]>;

  updates: Subject<MessageOperation> = new Subject<MessageOperation>();

  create: Subject<Message> = new Subject<Message>();
  markThreadAsRead: Subject<Thread> = new Subject<Thread>();

  constructor() {
    this.messages = this.updates
      .pipe(
        scan((messages: Message[],
              operation: MessageOperation) => {
                return operation(messages);
              },
            initialMessages),
        publishReplay(1),
        refCount()
      );

    this.create
      .pipe(
        map(function(message: Message): MessageOperation {
          return (messages: Message[]) => messages.concat(message);
        })
      )
      .subscribe(this.updates);

    this.newMessages
      .subscribe(this.create);

    this.markThreadAsRead
      .pipe(
        map((thread: Thread): MessageOperation => {
          return (messages: Message[]) => {
            return messages.map((message: Message) => {
              if (message.thread.id === thread.id) {
                message.isRead = true;
              }
              return message;
            });
          };
        })
      )
      .subscribe(this.updates);

  }

  addMessage(message: Message): void {
    this.newMessages.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
    return this.newMessages.pipe(
      filter((message: Message) => {
        return (message.thread.id === thread.id) &&
               (message.author.id !== user.id);
      })
    );
  }

}
