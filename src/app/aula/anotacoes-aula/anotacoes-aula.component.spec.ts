import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotacoesAulaComponent } from './anotacoes-aula.component';

describe('AnotacoesAulaComponent', () => {
  let component: AnotacoesAulaComponent;
  let fixture: ComponentFixture<AnotacoesAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotacoesAulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotacoesAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
