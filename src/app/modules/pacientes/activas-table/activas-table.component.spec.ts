import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivasTableComponent } from './activas-table.component';
import { SharedModule } from '@shared/shared.module';

describe('ActivasTableComponent', () => {
  let component: ActivasTableComponent;
  let fixture: ComponentFixture<ActivasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivasTableComponent ],
      imports: [SharedModule]
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
