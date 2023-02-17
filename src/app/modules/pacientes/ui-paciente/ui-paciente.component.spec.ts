import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPacienteComponent } from './ui-paciente.component';
import { SharedModule } from '@shared/shared.module';
import { TopbarComponent } from '@layout/topbar/topbar.component';
import { PacienteService } from '@data/services/api/paciente.service';

describe('UiPacienteComponent', () => {
  let component: UiPacienteComponent;
  let fixture: ComponentFixture<UiPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPacienteComponent,TopbarComponent ],
      imports:[SharedModule],
      providers:[PacienteService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
