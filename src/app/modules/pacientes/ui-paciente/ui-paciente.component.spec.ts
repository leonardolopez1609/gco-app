import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPacienteComponent } from './ui-paciente.component';

describe('UiPacienteComponent', () => {
  let component: UiPacienteComponent;
  let fixture: ComponentFixture<UiPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPacienteComponent ]
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
