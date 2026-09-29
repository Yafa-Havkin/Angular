import { TestBed } from '@angular/core/testing';

import { KabalotService } from './Kabalot.service'

describe('Kabalot', () => {
  let service: KabalotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KabalotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
