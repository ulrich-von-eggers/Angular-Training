import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploSelectoresComponent } from './ejemplo-selectores.component';

describe('EjemploSelectoresComponent', () => {
  let component: EjemploSelectoresComponent;
  let fixture: ComponentFixture<EjemploSelectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemploSelectoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjemploSelectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
