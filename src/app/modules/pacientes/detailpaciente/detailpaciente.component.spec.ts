import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpacienteComponent } from './detailpaciente.component';
import { SharedModule } from '@shared/shared.module';
import { PacienteGateway } from '@data/gateways/paciente-gateway';

describe('DetailpacienteComponent', () => {
  let component: DetailpacienteComponent;
  let fixture: ComponentFixture<DetailpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpacienteComponent ],
      imports: [SharedModule],
      providers:[PacienteGateway]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
