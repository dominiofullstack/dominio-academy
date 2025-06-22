import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAulasComponent } from './lista-aulas.component';

describe('ListaAulasComponent', () => {
  let component: ListaAulasComponent;
  let fixture: ComponentFixture<ListaAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAulasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
