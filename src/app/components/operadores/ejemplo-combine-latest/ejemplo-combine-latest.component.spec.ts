import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploCombineLatestComponent } from './ejemplo-combine-latest.component';

describe('EjemploCombineLatestComponent', () => {
  let component: EjemploCombineLatestComponent;
  let fixture: ComponentFixture<EjemploCombineLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemploCombineLatestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjemploCombineLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
