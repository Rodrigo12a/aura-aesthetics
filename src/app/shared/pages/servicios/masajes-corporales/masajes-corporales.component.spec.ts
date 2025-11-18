import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasajesCorporalesComponent } from './masajes-corporales.component';

describe('MasajesCorporalesComponent', () => {
  let component: MasajesCorporalesComponent;
  let fixture: ComponentFixture<MasajesCorporalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasajesCorporalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasajesCorporalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
