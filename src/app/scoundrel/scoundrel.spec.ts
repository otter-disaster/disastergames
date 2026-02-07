import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scoundrel } from './scoundrel';

describe('Scoundrel', () => {
  let component: Scoundrel;
  let fixture: ComponentFixture<Scoundrel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scoundrel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scoundrel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
