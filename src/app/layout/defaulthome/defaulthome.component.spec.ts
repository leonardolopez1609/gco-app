import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulthomeComponent } from './defaulthome.component';

describe('DefauthomeComponent', () => {
  let component: DefaulthomeComponent;
  let fixture: ComponentFixture<DefaulthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaulthomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaulthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
