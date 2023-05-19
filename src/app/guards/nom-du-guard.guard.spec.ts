import { TestBed } from '@angular/core/testing';

import { NomDuGuardGuard } from './nom-du-guard.guard';

describe('NomDuGuardGuard', () => {
  let guard: NomDuGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NomDuGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
