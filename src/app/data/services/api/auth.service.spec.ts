import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    
    await TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
