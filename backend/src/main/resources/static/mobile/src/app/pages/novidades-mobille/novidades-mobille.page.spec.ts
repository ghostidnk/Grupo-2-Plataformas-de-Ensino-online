import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovidadesMobillePage } from './novidades-mobille.page';

describe('NovidadesMobillePage', () => {
  let component: NovidadesMobillePage;
  let fixture: ComponentFixture<NovidadesMobillePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NovidadesMobillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
