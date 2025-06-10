import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerIaComponent } from './banner-ia.component';

describe('BannerIaComponent', () => {
  let component: BannerIaComponent;
  let fixture: ComponentFixture<BannerIaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerIaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
