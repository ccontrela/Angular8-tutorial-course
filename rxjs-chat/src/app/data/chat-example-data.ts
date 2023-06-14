import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';
import { Message } from '../message/message.model';
import { MessagesService } from '../message/messages.service';
import { ThreadsService } from '../thread/threads.service';
import { UsersService } from '../user/users.service';

const me: User = new User('Juliet', 'assets/images/avatars/female-avatar-1.png');
const ladycap: User = new User('Lady Capulet', 'assets/images/avatars/female-avatar-2.png');
const echo: User = new User('Echo Bot', 'assets/images/avatars/male-avatar-1.png');
const rev: User = new User('Reverse Bot', 'assets/images/avatars/female-avatar-4.png');
const wait: User = new User('Waiting Bot', 'assets/images/avatars/male-avatar-2.png');

const tLadycap: Thread = new Thread('tLadycap', ladycap.name, ladycap.avatarSrc);
const tEcho: Thread = new Thread('tEcho', echo.name, echo.avatarSrc);
const tRev: Thread = new Thread('tRev', rev.name, rev.avatarSrc);
const tWait: Thread = new Thread('tWait', wait.name, wait.avatarSrc);

const initialMessages: Message[] = [
  new Message({
    author: me,
    sentAt: new Date(Date.now() - 60000*45),
    text: 'Yet let me weep for such a feeling loss.',
    thread: tLadycap
  }),
  new Message({
    author: ladycap,
    sentAt: new Date(Date.now() - 60000*20),
    text: 'So shall you feel the loss, but not the friend which you weep for.',
    thread: tLadycap
  }),
  new Message({
    author: echo,
    sentAt: new Date(Date.now() - 60000*1),
    text: `I\'ll echo whatever you send me`,
    thread: tEcho
  }),
  new Message({
    author: rev,
    sentAt: new Date(Date.now() - 60000*3),
    text: `I\'ll reverse whatever you send me`,
    thread: tRev
  }),
  new Message({
    author: wait,
    sentAt: new Date(Date.now() - 60000*4),
    text: `I\'ll wait however many seconds you send to me before responding. Try sending '3'`,
    thread: tWait
  })
];

export class ChatExampleData {

  static init(messagesService: MessagesService,
              threadsService: ThreadsService,
              usersService: UsersService): void {
    messagesService.messages.subscribe(() => ({}));
    usersService.setCurrentUser(me);
    initialMessages.map((message: Message) => messagesService.addMessage(message));
    threadsService.setCurrentThread(tEcho);
    this.setupBots(messagesService);
  }

  static setupBots(messagesService: MessagesService): void {

    messagesService.messagesForThreadUser(tEcho, echo)
      .forEach((message: Message): void => {
        messagesService.addMessage(
          new Message({
            author: echo,
            text: message.text,
            thread: tEcho
          })
        );
      },
      null as any);
    
    messagesService.messagesForThreadUser(tRev, rev)
      .forEach((message: Message): void => {
        messagesService.addMessage(
          new Message({
            author: rev,
            text: message.text.split('').reverse().join(''),
            thread: tRev
          })
        );
      },
      null as any);

    messagesService.messagesForThreadUser(tWait, wait)
      .forEach((message: Message): void => {
        let waitTime: number = parseInt(message.text, 10);
        let reply: string;
        if (isNaN(waitTime)) {
          waitTime = 0;
          reply = `I didn't understand ${message.text}. Try sending me a number`;
        } else {
          reply = `I waited ${waitTime} seconds to send you this.`;
        }
        setTimeout(() => {
          messagesService.addMessage(
            new Message({
              author: wait,
              text: reply,
              thread: tWait
            })
          );
        },
        waitTime*1000);
      },
      null as any);
  }

}
