import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaCursosComponent } from './jornada-cursos.component';

describe('JornadaCursosComponent', () => {
  let component: JornadaCursosComponent;
  let fixture: ComponentFixture<JornadaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JornadaCursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JornadaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
