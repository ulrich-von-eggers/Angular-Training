import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploSwitchmapComponent } from './ejemplo-switchmap.component';

describe('EjemploSwitchmapComponent', () => {
  let component: EjemploSwitchmapComponent;
  let fixture: ComponentFixture<EjemploSwitchmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemploSwitchmapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjemploSwitchmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
