import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solicitud1Component } from './solicitud1.component';

describe('Solicitud1Component', () => {
  let component: Solicitud1Component;
  let fixture: ComponentFixture<Solicitud1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Solicitud1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solicitud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
