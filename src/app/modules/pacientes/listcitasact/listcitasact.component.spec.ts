import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcitasactComponent } from './listcitasact.component';

describe('ListcitasactComponent', () => {
  let component: ListcitasactComponent;
  let fixture: ComponentFixture<ListcitasactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcitasactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcitasactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
