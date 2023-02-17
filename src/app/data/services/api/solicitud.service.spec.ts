import { TestBed } from '@angular/core/testing';

import { SolicitudService } from './solicitud.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';

describe('SolicitudService', () => {
  let service: SolicitudService;

  beforeEach(async () => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudService);

    await TestBed.configureTestingModule({
      imports: [HttpClientModule,SharedModule]
    })
    .compileComponents();
 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
