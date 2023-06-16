import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Thread } from '../thread/thread.model';

@Component({
  selector: 'app-chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.css']
})
export class ChatThreadComponent implements OnInit {
  @Input() thread: Thread;
  @Input() selected = false;
  @Output() onThreadSelected: EventEmitter<Thread>;

  constructor(){
    this.onThreadSelected = new EventEmitter<Thread>();
  }

  ngOnInit(): void {
    
  }

  clicked(event: any): void {
    this.onThreadSelected.emit(this.thread);
    event.preventDefault();
  }
}
