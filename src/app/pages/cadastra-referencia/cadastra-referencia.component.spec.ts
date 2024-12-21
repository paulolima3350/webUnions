import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraReferenciaComponent } from './cadastra-referencia.component';

describe('CadastraReferenciaComponent', () => {
  let component: CadastraReferenciaComponent;
  let fixture: ComponentFixture<CadastraReferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastraReferenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
