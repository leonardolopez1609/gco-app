import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivasTableComponent } from './activas-table.component';

describe('ActivasTableComponent', () => {
  let component: ActivasTableComponent;
  let fixture: ComponentFixture<ActivasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivasTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
