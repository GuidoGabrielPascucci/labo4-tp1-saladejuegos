import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorOMenorRutaComponent } from './mayor-o-menor-ruta.component';

describe('MayorOMenorRutaComponent', () => {
  let component: MayorOMenorRutaComponent;
  let fixture: ComponentFixture<MayorOMenorRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MayorOMenorRutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MayorOMenorRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
