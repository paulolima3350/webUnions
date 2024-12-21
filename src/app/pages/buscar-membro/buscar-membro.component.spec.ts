import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMembroComponent } from './buscar-membro.component';

describe('BuscarMembroComponent', () => {
  let component: BuscarMembroComponent;
  let fixture: ComponentFixture<BuscarMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarMembroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
