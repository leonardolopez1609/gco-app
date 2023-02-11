import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendientesTableComponent } from './pendientes-table.component';

describe('PendientesTableComponent', () => {
  let component: PendientesTableComponent;
  let fixture: ComponentFixture<PendientesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendientesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendientesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
