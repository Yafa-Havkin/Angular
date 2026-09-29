import { TestBed } from '@angular/core/testing';

import { KabalotSRV } from './kabalotSRV'

describe('Kabalot', () => {
  let service: KabalotSRV;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KabalotSRV);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
