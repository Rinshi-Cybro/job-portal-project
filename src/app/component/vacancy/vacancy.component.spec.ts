import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyComponent } from './vacancy.component';

describe('VacancyComponent', () => {
  let component: VacancyComponent;
  let fixture: ComponentFixture<VacancyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacancyComponent]
    });
    fixture = TestBed.createComponent(VacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
