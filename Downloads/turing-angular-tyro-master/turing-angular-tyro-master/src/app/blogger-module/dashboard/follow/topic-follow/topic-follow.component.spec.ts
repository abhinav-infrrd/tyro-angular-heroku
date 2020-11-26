import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicFollowComponent } from './topic-follow.component';

describe('TopicFollowComponent', () => {
  let component: TopicFollowComponent;
  let fixture: ComponentFixture<TopicFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
