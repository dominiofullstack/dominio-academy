import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacaoListComponent } from './formacao-list.component';

describe('FormacaoListComponent', () => {
  let component: FormacaoListComponent;
  let fixture: ComponentFixture<FormacaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormacaoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
