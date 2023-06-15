import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppState } from './app.state';
import { AppStore } from './app.store';
import * as CounterActions from './counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-counter';

  counter: number;

  constructor(@Inject(AppStore) private store: Store<AppState>){
    store.subscribe(() => this.readState());
    this.readState();

    this.counter = 0;
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment(){
    this.store.dispatch(CounterActions.increment());
  }

  decrement(){
    this.store.dispatch(CounterActions.decrement());
  }
}
