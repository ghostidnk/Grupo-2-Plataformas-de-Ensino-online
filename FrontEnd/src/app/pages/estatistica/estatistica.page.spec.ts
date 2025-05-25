import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstatisticaPage } from './estatistica.page';

describe('EstatisticaPage', () => {
  let component: EstatisticaPage;
  let fixture: ComponentFixture<EstatisticaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
