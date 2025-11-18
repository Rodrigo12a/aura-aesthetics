import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientosFacialesComponent } from './tratamientos-faciales.component';

describe('TratamientosFacialesComponent', () => {
  let component: TratamientosFacialesComponent;
  let fixture: ComponentFixture<TratamientosFacialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TratamientosFacialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientosFacialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
