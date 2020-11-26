import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleFollowComponent } from './people-follow.component';

describe('PeopleFollowComponent', () => {
  let component: PeopleFollowComponent;
  let fixture: ComponentFixture<PeopleFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
