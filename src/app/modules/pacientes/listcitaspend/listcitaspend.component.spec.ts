import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcitaspendComponent } from './listcitaspend.component';

describe('ListcitaspendComponent', () => {
  let component: ListcitaspendComponent;
  let fixture: ComponentFixture<ListcitaspendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcitaspendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcitaspendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
