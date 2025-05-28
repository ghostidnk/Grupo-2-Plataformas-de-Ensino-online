import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsideMobillePage } from './inside-mobille.page';

describe('InsideMobillePage', () => {
  let component: InsideMobillePage;
  let fixture: ComponentFixture<InsideMobillePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideMobillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
