import { TestBed } from '@angular/core/testing';

import { TrendingPostService } from './trending-post.service';

describe('TrendingPostService', () => {
  let service: TrendingPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
