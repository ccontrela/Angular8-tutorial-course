import { Component, Inject } from '@angular/core';
import { AppStore } from '../app.store';
import * as Redux from 'redux';
import { AppState, getUnreadMessagesCount } from '../app.reducer';

@Component({
  selector: 'chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent {
  unreadMessagesCount: number;

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    this.unreadMessagesCount = 0;
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  updateState(){
    console.log(this.store.getState().users);
    this.unreadMessagesCount = getUnreadMessagesCount(this.store.getState());
  }
}
