import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntadosRutaComponent } from './preguntados-ruta.component';

describe('PreguntadosRutaComponent', () => {
  let component: PreguntadosRutaComponent;
  let fixture: ComponentFixture<PreguntadosRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntadosRutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreguntadosRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
