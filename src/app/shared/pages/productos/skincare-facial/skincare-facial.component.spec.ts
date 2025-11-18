import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkincareFacialComponent } from './skincare-facial.component';

describe('SkincareFacialComponent', () => {
  let component: SkincareFacialComponent;
  let fixture: ComponentFixture<SkincareFacialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkincareFacialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkincareFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
