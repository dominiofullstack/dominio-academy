import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilhaDeEstudoComponent } from './trilha-de-estudo.component';

describe('TrilhaDeEstudoComponent', () => {
  let component: TrilhaDeEstudoComponent;
  let fixture: ComponentFixture<TrilhaDeEstudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrilhaDeEstudoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrilhaDeEstudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
