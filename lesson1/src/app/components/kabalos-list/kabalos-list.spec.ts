import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabalosList } from './kabalos-list';

describe('KabalosList', () => {
  let component: KabalosList;
  let fixture: ComponentFixture<KabalosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KabalosList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KabalosList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
