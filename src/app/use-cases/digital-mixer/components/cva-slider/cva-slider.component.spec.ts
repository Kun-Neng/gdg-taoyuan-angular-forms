import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvaSliderComponent } from './cva-slider.component';

describe('CvaSliderComponent', () => {
  let component: CvaSliderComponent;
  let fixture: ComponentFixture<CvaSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvaSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
