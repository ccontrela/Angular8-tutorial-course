import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatThreadsComponent } from './chat-threads.component';

describe('ChatThreadsComponent', () => {
  let component: ChatThreadsComponent;
  let fixture: ComponentFixture<ChatThreadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatThreadsComponent]
    });
    fixture = TestBed.createComponent(ChatThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
