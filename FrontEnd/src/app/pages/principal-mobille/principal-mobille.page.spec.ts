import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalMobillePage } from './principal-mobille.page';

describe('PrincipalMobillePage', () => {
  let component: PrincipalMobillePage;
  let fixture: ComponentFixture<PrincipalMobillePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMobillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
