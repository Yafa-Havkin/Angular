import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kabalos } from './kabalos';

describe('Kabalos', () => {
  let component: Kabalos;
  let fixture: ComponentFixture<Kabalos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kabalos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kabalos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
