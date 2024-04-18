import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploTapComponent } from './ejemplo-tap.component';

describe('EjemploTapComponent', () => {
  let component: EjemploTapComponent;
  let fixture: ComponentFixture<EjemploTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemploTapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjemploTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
