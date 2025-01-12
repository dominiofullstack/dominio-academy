import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontanhaComponent } from './montanha.component';

describe('MontanhaComponent', () => {
  let component: MontanhaComponent;
  let fixture: ComponentFixture<MontanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MontanhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
