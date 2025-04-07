import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloComDivisoresComponent } from './titulo-com-divisores.component';

describe('TituloComDivisoresComponent', () => {
  let component: TituloComDivisoresComponent;
  let fixture: ComponentFixture<TituloComDivisoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloComDivisoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloComDivisoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
