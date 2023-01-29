import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcitashistComponent } from './listcitashist.component';

describe('ListcitashistComponent', () => {
  let component: ListcitashistComponent;
  let fixture: ComponentFixture<ListcitashistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcitashistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcitashistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
