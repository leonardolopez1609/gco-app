import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { SharedModule } from '@shared/shared.module';
import { FormLoginComponent } from './form-login.component';
import { PacienteService } from '@data/services/api/paciente.service';
import { PacienteGateway } from '@data/gateways/paciente-gateway';
import { UiPacienteComponent } from '@modules/pacientes/ui-paciente/ui-paciente.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent,FormLoginComponent],
      imports: [SharedModule,UiPacienteComponent],
      providers:[PacienteService]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
