import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovidadesPage } from './novidades.page';

describe('NovidadesPage', () => {
  let component: NovidadesPage;
  let fixture: ComponentFixture<NovidadesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NovidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
