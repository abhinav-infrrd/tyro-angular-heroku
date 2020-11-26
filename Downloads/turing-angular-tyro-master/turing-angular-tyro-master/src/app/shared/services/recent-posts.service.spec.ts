import { TestBed } from '@angular/core/testing';

import { RecentPostsService } from './recent-posts.service';

describe('RecentPostsService', () => {
  let service: RecentPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
