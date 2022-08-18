import { TestBed } from '@angular/core/testing';

import { ProtectRouteGuard } from './protect-route.guard';

describe('ProtectRouteGuard', () => {
  let guard: ProtectRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
