import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoRutaComponent } from './ahorcado-ruta.component';

describe('AhorcadoRutaComponent', () => {
  let component: AhorcadoRutaComponent;
  let fixture: ComponentFixture<AhorcadoRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhorcadoRutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AhorcadoRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
