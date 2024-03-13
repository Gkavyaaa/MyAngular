import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashoardauthComponent } from './dashoardauth.component';

describe('DashoardauthComponent', () => {
  let component: DashoardauthComponent;
  let fixture: ComponentFixture<DashoardauthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashoardauthComponent]
    });
    fixture = TestBed.createComponent(DashoardauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
