import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroMobillePage } from './cadastro-mobille.page';

describe('CadastroMobillePage', () => {
  let component: CadastroMobillePage;
  let fixture: ComponentFixture<CadastroMobillePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMobillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
