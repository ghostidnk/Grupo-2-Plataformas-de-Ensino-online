import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstatisticaMobillePage } from './estatistica-mobille.page';

describe('EstatisticaMobillePage', () => {
  let component: EstatisticaMobillePage;
  let fixture: ComponentFixture<EstatisticaMobillePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticaMobillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
