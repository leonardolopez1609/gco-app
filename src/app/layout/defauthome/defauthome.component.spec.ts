import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefauthomeComponent } from './defauthome.component';

describe('DefauthomeComponent', () => {
  let component: DefauthomeComponent;
  let fixture: ComponentFixture<DefauthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefauthomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefauthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
