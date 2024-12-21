import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMembroComponent } from './consulta-membro.component';

describe('ConsultaMembroComponent', () => {
  let component: ConsultaMembroComponent;
  let fixture: ComponentFixture<ConsultaMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaMembroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
