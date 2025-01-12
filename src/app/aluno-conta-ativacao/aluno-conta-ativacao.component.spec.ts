import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoContaAtivacaoComponent } from './aluno-conta-ativacao.component';

describe('AlunoContaAtivacaoComponent', () => {
  let component: AlunoContaAtivacaoComponent;
  let fixture: ComponentFixture<AlunoContaAtivacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoContaAtivacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoContaAtivacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
