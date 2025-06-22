import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoAulaComponent } from './texto-aula.component';

describe('TextoAulaComponent', () => {
  let component: TextoAulaComponent;
  let fixture: ComponentFixture<TextoAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoAulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
