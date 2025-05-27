import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginMobillePage } from './login-mobille.page';

describe('LoginMobillePage', () => {
  let component: LoginMobillePage;
  let fixture: ComponentFixture<LoginMobillePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMobillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
