import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ThreadsService } from '../thread/threads.service';
import { Thread } from '../thread/thread.model';

@Component({
  selector: 'app-chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.css']
})
export class ChatThreadComponent implements OnInit {
  @Input() thread: Thread;
  seleted = false;

  constructor(public threadsService: ThreadsService){
    this.thread = new Thread();
  }

  ngOnInit(): void {
    this.threadsService.currentThread
    .subscribe((currentThread: Thread) => {
      this.seleted = currentThread && this.thread && (currentThread.id === this.thread.id);
    });
  }

  clicked(event: any): void {
    this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();
  }
}
