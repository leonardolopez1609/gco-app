import { TestBed } from '@angular/core/testing';

import { TypeSoliService } from './type-soli.service';

describe('TypeSoliService', () => {
  let service: TypeSoliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeSoliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
