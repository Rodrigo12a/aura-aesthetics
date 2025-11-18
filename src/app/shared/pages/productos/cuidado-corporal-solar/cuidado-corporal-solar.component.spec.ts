import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoCorporalSolarComponent } from './cuidado-corporal-solar.component';

describe('CuidadoCorporalSolarComponent', () => {
  let component: CuidadoCorporalSolarComponent;
  let fixture: ComponentFixture<CuidadoCorporalSolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuidadoCorporalSolarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuidadoCorporalSolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
