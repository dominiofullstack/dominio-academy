import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoCodigoComponent } from './bloco-codigo.component';

describe('BlocoCodigoComponent', () => {
  let component: BlocoCodigoComponent;
  let fixture: ComponentFixture<BlocoCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocoCodigoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocoCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
