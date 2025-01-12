import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDeslogadoComponent } from './cursos-deslogado.component';

describe('CursosDeslogadoComponent', () => {
  let component: CursosDeslogadoComponent;
  let fixture: ComponentFixture<CursosDeslogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosDeslogadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosDeslogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
