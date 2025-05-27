import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosMobillePage } from './cursos-mobille.page';

describe('CursosMobillePage', () => {
  let component: CursosMobillePage;
  let fixture: ComponentFixture<CursosMobillePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosMobillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
