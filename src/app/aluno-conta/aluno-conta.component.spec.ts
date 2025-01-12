import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoContaComponent } from './aluno-conta.component';

describe('AlunoContaComponent', () => {
  let component: AlunoContaComponent;
  let fixture: ComponentFixture<AlunoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoContaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
