import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosLogadoComponent } from './cursos-logado.component';

describe('CursosLogadoComponent', () => {
  let component: CursosLogadoComponent;
  let fixture: ComponentFixture<CursosLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosLogadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
