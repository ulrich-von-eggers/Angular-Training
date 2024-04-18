import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploReactivoComponent } from './ejemplo-reactivo.component';

describe('EjemploReactivoComponent', () => {
  let component: EjemploReactivoComponent;
  let fixture: ComponentFixture<EjemploReactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemploReactivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjemploReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
